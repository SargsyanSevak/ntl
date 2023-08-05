export default function AddLoads() {
  return (
    <form className="px-4 md:px-10 pb-4">
      <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-12">
          <div className="mt-10 grid grid-cols-1 gap-x-6 md:gap-y-4 gap-y-2 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label className="block text-sm font-medium leading-6 text-gray-900">
                Բարձում
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="pick up"
                  id="pick up"
                  autoComplete="given-name"
                  placeholder="օր. Երևան"
                  className="p-4 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 focus:ring-gray-300 placeholder:text-gray-400   sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label className="block text-sm font-medium leading-6 text-gray-900">
                Դատարկում
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="delivery"
                  id="delivery"
                  autoComplete="given-name"
                  placeholder="օր. Սամարա
                  "
                  className="p-4 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 focus:ring-gray-300 placeholder:text-gray-400   sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label className="block text-sm font-medium leading-6 text-gray-900">
                Բարձման օր
              </label>
              <div className="mt-2">
                <input
                  type="date"
                  name="date"
                  id="date"
                  autoComplete="given-name"
                  className="p-4 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 focus:ring-gray-300 placeholder:text-gray-400   sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label className="block text-sm font-medium leading-6 text-gray-900">
                Բեռնատարի տեսակ
              </label>
              <div className="mt-2">
                <select
                  id="truck-type"
                  name="truck-type"
                  autoComplete="country-name"
                  className="p-4 block w-full rounded-md border-0 py-[9px] text-gray-900 shadow-sm ring-1 focus:ring-gray-300 placeholder:text-gray-400   sm:text-sm sm:leading-6"
                >
                  <option>ռեֆ</option>
                  <option>տենտ</option>
                  <option>կոնտեյներ</option>
                  <option>ավիա</option>
                </select>
              </div>
            </div>
            <div className="sm:col-span-3">
              <label className="block text-sm font-medium leading-6 text-gray-900">
                Բեռի ծավալ մ³
              </label>
              <div className="mt-2">
                <input
                  type="number"
                  name="load-value"
                  id="load-value"
                  autoComplete="family-name"
                  placeholder="օր. 86"
                  className="p-4 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 focus:ring-gray-300 placeholder:text-gray-400   sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label className="block text-sm font-medium leading-6 text-gray-900">
                Բեռի քաշ կգ
              </label>
              <div className="mt-2">
                <input
                  type="number"
                  name="weight"
                  id="weight"
                  placeholder="օր. 22000"
                  autoComplete="family-name"
                  className="p-4 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 focus:ring-gray-300 placeholder:text-gray-400   sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label className="block text-sm font-medium leading-6 text-gray-900">
                Ամբողջական/հավաքական
              </label>
              <div className="mt-2">
                <select
                  id="type"
                  name="type"
                  autoComplete="type"
                  className="p-4 block w-full rounded-md border-0 py-[9px] text-gray-900 shadow-sm ring-1 focus:ring-gray-300 placeholder:text-gray-400   sm:text-sm sm:leading-6"
                >
                  <option>ամբողջական</option>
                  <option>հավաքական</option>
                </select>
              </div>
            </div>
            <div className="sm:col-span-3">
              <label className="block text-sm font-medium leading-6 text-gray-900">
                Գին
              </label>
              <div className="mt-2">
                <input
                  type="number"
                  name="rate"
                  id="rate"
                  autoComplete="given-name"
                  placeholder="օր. 3400"
                  className="p-4 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 focus:ring-gray-300 placeholder:text-gray-400   sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button type="button" className="text-sm  leading-6 text-gray-900">
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
