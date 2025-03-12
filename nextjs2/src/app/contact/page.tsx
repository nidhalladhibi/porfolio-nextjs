export default function ContactPage() {
    return (
      <div className="max-w-2xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-4">Contact</h1>
        <p className="text-gray-700 mb-6">N'hésitez pas à me contacter via le formulaire ci-dessous.</p>
        
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Nom</label>
            <input type="text" className="mt-1 p-2 w-full border rounded-md" placeholder="Votre nom" />
          </div>
  
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input type="email" className="mt-1 p-2 w-full border rounded-md" placeholder="Votre email" />
          </div>
  
          <div>
            <label className="block text-sm font-medium text-gray-700">Message</label>
            <textarea className="mt-1 p-2 w-full border rounded-md" rows={4} placeholder="Votre message"></textarea>
          </div>
  
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
            Envoyer
          </button>
        </form>
      </div>
    );
  }
  