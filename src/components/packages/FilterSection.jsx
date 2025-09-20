// src/components/packages/FilterSection.jsx
const FilterSection = ({ filters, onFilterChange, onClearFilters }) => {
  const filterOptions = {
    budget: [
      { value: "", label: "Any Budget" },
      { value: "5000-10000", label: "₹5,000 - ₹10,000" },
      { value: "10000-20000", label: "₹10,000 - ₹20,000" },
      { value: "20000-30000", label: "₹20,000 - ₹30,000" },
      { value: "30000-50000", label: "₹30,000 - ₹50,000" },
      { value: "50000-100000", label: "₹50,000+" },
    ],
    duration: [
      { value: "", label: "Any Duration" },
      { value: "1-3", label: "1-3 Days" },
      { value: "4-6", label: "4-6 Days" },
      { value: "7-10", label: "7-10 Days" },
      { value: "10-15", label: "10-15 Days" },
    ],
    type: [
      { value: "", label: "Any Type" },
      { value: "family", label: "Family Vacation" },
      { value: "honeymoon", label: "Honeymoon" },
      { value: "adventure", label: "Adventure" },
      { value: "luxury", label: "Luxury" },
      { value: "budget", label: "Budget" },
    ],
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md sticky top-24">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-semibold text-gray-900">Filters</h2>
        <button
          onClick={onClearFilters}
          className="text-sm text-primary-600 hover:text-primary-800"
        >
          Clear All
        </button>
      </div>

      {/* Search Filter */}
      <div className="mb-6">
        <label
          htmlFor="search"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          Search Packages
        </label>
        <input
          type="text"
          id="search"
          placeholder="Search by name, destination..."
          value={filters.search}
          onChange={(e) => onFilterChange("search", e.target.value)}
          className="block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
        />
      </div>

      {/* Budget Filter */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Budget (₹)
        </label>
        <div className="space-y-2">
          {filterOptions.budget.map((option) => (
            <div key={option.value} className="flex items-center">
              <input
                id={`budget-${option.value}`}
                name="budget"
                type="radio"
                checked={filters.budget === option.value}
                onChange={() => onFilterChange("budget", option.value)}
                className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300"
              />
              <label
                htmlFor={`budget-${option.value}`}
                className="ml-3 block text-sm text-gray-700"
              >
                {option.label}
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* Duration Filter */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Duration
        </label>
        <div className="space-y-2">
          {filterOptions.duration.map((option) => (
            <div key={option.value} className="flex items-center">
              <input
                id={`duration-${option.value}`}
                name="duration"
                type="radio"
                checked={filters.duration === option.value}
                onChange={() => onFilterChange("duration", option.value)}
                className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300"
              />
              <label
                htmlFor={`duration-${option.value}`}
                className="ml-3 block text-sm text-gray-700"
              >
                {option.label}
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* Type Filter */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Package Type
        </label>
        <div className="space-y-2">
          {filterOptions.type.map((option) => (
            <div key={option.value} className="flex items-center">
              <input
                id={`type-${option.value}`}
                name="type"
                type="radio"
                checked={filters.type === option.value}
                onChange={() => onFilterChange("type", option.value)}
                className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300"
              />
              <label
                htmlFor={`type-${option.value}`}
                className="ml-3 block text-sm text-gray-700"
              >
                {option.label}
              </label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FilterSection;
