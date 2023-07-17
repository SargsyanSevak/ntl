

export default function AddLoads() {




  return (
    <form className="px-4 md:px-10 pb-4">
      <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-12">
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label
               
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Pick up
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="pick up"
                  id="pick up"
                  autoComplete="given-name"
                  placeholder="bardzman vayr"
                  className="p-4 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
               
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Delivery
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="delivery"
                  id="delivery"
                  autoComplete="given-name"
                  placeholder="datarkman vayr"
                  className="p-4 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
             
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Date
              </label>
              <div className="mt-2">
                <input
                  type="date"
                  name="date"
                  id="date"
                 
                  autoComplete="given-name"
                  className="p-4 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
             
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Truck type
              </label>
              <div className="mt-2">
                <select
                  id="truck-type"
                  name="truck-type"
                  autoComplete="country-name"
                  className="p-4 block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-full sm:text-full sm:leading-6"
                >
                  <option>ref</option>
                  <option>tent</option>
                  <option>container</option>
                </select>
              </div>
            </div>
            <div className="sm:col-span-3">
              <label
             
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Load caval
              </label>
              <div className="mt-2">
                <input
                  type="number"
                  name="load-value"
                  id="load-value"
                  autoComplete="family-name"
                  placeholder="beri cavaly"
                  className="p-4 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
              
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                weight
              </label>
              <div className="mt-2">
                <input
                  type="number"
                  name="weight"
                  id="weight"
                  placeholder="beri qashy"
                  autoComplete="family-name"
                  className="p-4 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
               
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                P or A
              </label>
              <div className="mt-2">
                <select
                  id="type"
                  name="type"
                  autoComplete="type"
                  className="p-4 block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-full sm:text-full sm:leading-6"
                >
                  <option>Full</option>
                  <option>Partial</option>
                </select>
              </div>
            </div>
            <div className="sm:col-span-3">
              <label
              
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Rate
              </label>
              <div className="mt-2">
                <input
                  type="number"
                  name="rate"
                  id="rate"
                  autoComplete="given-name"
                  placeholder="arjeqy"
                  className="p-4 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button
          type="button"
          className="text-sm  leading-6 text-gray-900"
        >
          Չեղարկել
        </button>
        <button
          type="submit"
          className="rounded-md bg-blue-600 px-3 py-2 text-sm  text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-all"
        >
          Ավելացնել
        </button>
      </div>
    </form>
  );
}
