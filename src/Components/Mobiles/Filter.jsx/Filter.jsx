import { useState } from "react";
import AllMobiles from "../AllMobiles/AllMobiles";
import Select from "react-select";
import NotFound from "../../../Shared/NotFound/NotFound";
import { MdOutlineFilterList } from "react-icons/md";
import useMobiles from "../../../Hooks/useMobiles";

const options = [
  { value: "default", label: "Default" },
  { value: "highToLow", label: "$High - $Low" },
  { value: "lowToHigh", label: "$Low - $High" },
];

const Filter = () => {
  const [mobiles] = useMobiles();

  const [searchQuery, setSearchQuery] = useState("");
  const [sortOption, setSortOption] = useState(options[0]);

  const brands = [
    "Samsung",
    "Apple",
    "Huawei",
    "Google",
    "ASUS",
    "Oneplus",
    "Xiaomi",
    "Vivo",
    "Oppo",
    "ZTE",
  ];

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSortChange = (selectedOption) => {
    setSortOption(selectedOption);
  };

  const filteredMobiles = mobiles.filter((mobile) =>
    mobile.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const sortedMobiles = [...filteredMobiles];

  if (sortOption.value === "highToLow") {
    sortedMobiles.sort((a, b) => b.price - a.price);
  } else if (sortOption.value === "lowToHigh") {
    sortedMobiles.sort((a, b) => a.price - b.price);
  }

  return (
    <div>
      <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 md:gap-x-20 text-lg font-medium bg-white p-4 mb-4">
        {brands.map((brand, idx) => (
          <div
            key={idx}
            className="text-black hover:text-primary duration-300 cursor-pointer"
          >
            {brand}
          </div>
        ))}
      </div>

      <div className="grid md:grid-cols-3 xl:grid-cols-4 gap-4">
        <div className="bg-white p-4">
          <div className="flex items-center gap-2 text-2xl pb-4">
            <p>Filter</p>
            <MdOutlineFilterList />
          </div>

          <div className="w-full">
            <Select
              options={options}
              value={sortOption}
              onChange={handleSortChange}
            />
          </div>
        </div>

        <div className="md:col-span-2 xl:col-span-3">
          <div className="bg-white mb-4 p-4">
            <form>
              <input
                type="search"
                name="search"
                id="search"
                placeholder="Search Mobile"
                className="border-2 outline-none rounded-md w-full px-5 py-2"
                value={searchQuery}
                onChange={handleSearchChange}
              />
            </form>
          </div>

          <div>
            {sortedMobiles.length === 0 ? (
              <div className="flex justify-center py-10">
                <NotFound />
              </div>
            ) : (
              <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-x-4 gap-y-8 bg-white p-4">
                {sortedMobiles.map((mobile, idx) => (
                  <AllMobiles key={idx} mobile={mobile} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
