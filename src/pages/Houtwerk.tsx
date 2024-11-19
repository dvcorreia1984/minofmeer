const Houtwerk = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="section-container py-24">
        <h1 className="text-4xl font-bold text-center mb-12">Houtwerk</h1>
        <p className="text-center text-gray-600 mb-8">
          Ons spesialiseer in kwaliteit houtwerk en meubels.
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gray-50 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Meubels</h2>
            <p className="text-gray-600">
              Handgemaakte meubels volgens u spesifikasies.
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Kabinetwerk</h2>
            <p className="text-gray-600">
              Pasgemaakte kabinette en ingeboude kaste.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Houtwerk;