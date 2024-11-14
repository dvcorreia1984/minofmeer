interface SpecificationsProps {
  specs: {
    grootte: string;
    slaapkamers: string;
    badkamer: string;
    kombuis: string;
  };
}

const Specifications = ({ specs }: SpecificationsProps) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
      {Object.entries(specs).map(([key, value]) => (
        <div key={key} className="p-4 bg-gray-50 rounded-lg">
          <p className="text-sm text-gray-500 capitalize">{key}</p>
          <p className="text-lg font-semibold text-gray-900">{value}</p>
        </div>
      ))}
    </div>
  );
};

export default Specifications;