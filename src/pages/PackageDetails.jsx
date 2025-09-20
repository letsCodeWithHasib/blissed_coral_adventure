// src/pages/Packages.jsx
import { useState, useEffect } from "react";
import PackageCard from "../components/packages/PackageCard";
import FilterSection from "../components/packages/FilterSection";
import { packages } from "../data/packages";

const Packages = () => {
  const [filteredPackages, setFilteredPackages] = useState(packages);
  const [filters, setFilters] = useState({
    budget: "",
    duration: "",
    type: "",
    search: "",
  });

  // Filter packages based on selected filters
  useEffect(() => {
    let result = packages;

    // Budget filter
    if (filters.budget) {
      const [min, max] = filters.budget.split("-").map(Number);
      result = result.filter((pkg) => pkg.price >= min && pkg.price <= max);
    }

    // Duration filter
    if (filters.duration) {
      const [min, max] = filters.duration.split("-").map(Number);
      result = result.filter((pkg) => {
        const durationNum = parseInt(pkg.duration);
        return durationNum >= min && durationNum <= max;
      });
    }

    // Type filter
    if (filters.type) {
      result = result.filter((pkg) =>
        pkg.type.toLowerCase().includes(filters.type.toLowerCase())
      );
    }

    // Search filter
    if (filters.search) {
      const searchTerm = filters.search.toLowerCase();
      result = result.filter(
        (pkg) =>
          pkg.title.toLowerCase().includes(searchTerm) ||
          pkg.destinations.some((d) => d.toLowerCase().includes(searchTerm)) ||
          pkg.description.toLowerCase().includes(searchTerm)
      );
    }

    setFilteredPackages(result);
  }, [filters]);

  const handleFilterChange = (filterType, value) => {
    setFilters((prev) => ({
      ...prev,
      [filterType]: value,
    }));
  };

  const clearFilters = () => {
    setFilters({
      budget: "",
      duration: "",
      type: "",
      search: "",
    });
  };

  return (
    <div className="pt-20 pb-16">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-primary-800 mb-4">
            Andaman Tour Packages
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover our curated selection of Andaman tour packages designed to
            give you the perfect island experience
          </p>
        </div>

        {/* Filters and Results */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filter Sidebar */}
          <div className="lg:w-1/4">
            <FilterSection
              filters={filters}
              onFilterChange={handleFilterChange}
              onClearFilters={clearFilters}
            />
          </div>

          {/* Package Results */}
          <div className="lg:w-3/4">
            {/* Results Header */}
            <div className="flex justify-between items-center mb-6">
              <p className="text-gray-600">
                Showing{" "}
                <span className="font-semibold">{filteredPackages.length}</span>{" "}
                of <span className="font-semibold">{packages.length}</span>{" "}
                packages
              </p>
              <div className="flex items-center">
                <label
                  htmlFor="sort"
                  className="text-sm font-medium text-gray-700 mr-2"
                >
                  Sort by:
                </label>
                <select
                  id="sort"
                  className="block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
                >
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Duration: Short to Long</option>
                  <option>Duration: Long to Short</option>
                  <option>Most Popular</option>
                </select>
              </div>
            </div>

            {/* Packages Grid */}
            {filteredPackages.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredPackages.map((pkg) => (
                  <PackageCard key={pkg.id} package={pkg} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-primary-100">
                  <svg
                    className="h-6 w-6 text-primary-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="mt-2 text-lg font-medium text-gray-900">
                  No packages found
                </h3>
                <p className="mt-1 text-gray-500">
                  Try adjusting your search filters to find what you're looking
                  for.
                </p>
                <div className="mt-6">
                  <button onClick={clearFilters} className="btn-primary">
                    Clear All Filters
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Packages;
