import React, { useEffect, useRef, useState } from "react";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";
import { FiSearch } from "react-icons/fi";
import cn from "classnames";
import { Coords } from "google-map-react";
// import { useTypedSelector } from "@/app/hooks/useTypedSelector";

interface IInputPlaces {
  cbSuccess: (address: string, location: Coords) => void;
  type: "from" | "to";
}

const InputPlaces: React.FC<IInputPlaces> = ({ cbSuccess, type }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [address, setAddress] = useState<string>();
  // const { travelTime } = useTypedSelector((state) => state.taxi);

  const setFocus = () => {
    inputRef?.current?.focus();
  };

  const isFrom = type === "from";

  useEffect(() => {
    if (isFrom) setFocus();
  }, [type]);

  const handleSelect = (address: string) => {
    console.log(address);

    geocodeByAddress(address)
      .then((results) => getLatLng(results[0]))
      .then((location) => {
        cbSuccess(address, location);
        setAddress(address);
      })
      .catch((err) => console.log("error", err));
  };

  return (
    <PlacesAutocomplete
      value={address}
      onChange={setAddress}
      onSelect={handleSelect}
      onError={(error) => console.log(error)}
    >
      {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
        <div className={cn("shadow-lg", { "mb-5": isFrom })}>
          <div
            className="py-4 px-5 bg-white rounded-lg flex items-center"
            style={
              suggestions.length
                ? {
                    borderBottomLeftRadius: 0,
                    borderBottomRightRadius: 0,
                  }
                : {}
            }
            onClick={setFocus}
          >
            <FiSearch
              color={isFrom ? "#ffbc00" : "#615F5D"}
              className="mr-3 "
              size={26}
            />
            <input
              {...getInputProps({
                ref: inputRef,
                placeholder: isFrom ? "Where from?" : "Where to?",
                className: "outline-none w-full text-gray-800",
              })}
            />
            {!isFrom && (
              <div className="absolute right-5 text-sm text-gray-400 ">
                - min.
              </div>
            )}
          </div>
          <div
            className={cn(
              "absolute w-full h-0 overflow-y-auto rounded-b-lg z-10",
              {
                "h-48": suggestions.length || loading,
              }
            )}
          >
            {loading && <div className="p-2 bg-white">Loading ...</div>}

            {suggestions.map((suggestion, id) => {
              return (
                <div
                  {...getSuggestionItemProps(suggestion, {
                    className: cn("cursor-pointer p-3", {
                      "bg-gray-100": suggestion.active,
                      "bg-white": !suggestion.active,
                    }),
                  })}
                  key={`loc ${id}`}
                >
                  <span>{suggestion.description}</span>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </PlacesAutocomplete>
  );
};

export default InputPlaces;
