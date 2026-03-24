
function ServicesCard({ service }) {

  return (
    <div
      key={service.id}
      className="relative overflow-hidden max-w-lg m-2 sm:m-4 rounded-xl border border-gray-200 dark:border-gray-700 shadow-2xl shadow-gray-100 dark:shadow-white/10"
    >

      {/* Card */}
      <div className="flex items-center gap-10 p-8 hover:p-7.5 hover:m-0.5 transition-all rounded-[10px] bg-white dark:bg-gray-900 z-10 relative">
        <div className="bg-gray-100 dark:bg-gray-700 rounded-full">
          <img
            src={service.icon}
            alt={service.title}
            className="max-w-24 bg-white dark:bg-gray-900 rounded-full m-2"
          />
        </div>

        <div className="flex-1">
          <h3 className="font-bold text-gray-700 capitalize">
            {service.title}
          </h3>
          <p className="text-sm mt-2 text-gray-500"> {service.description} </p>
        </div>
      </div>

    </div>
  );
}

export default ServicesCard;
