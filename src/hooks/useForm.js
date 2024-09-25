import { useEffect, useState } from 'react';


const useForm = () => {
    const [formData, setFormData] = useState([]);

    const handleInputChanges = (name, value) => {
        setFormData({
          ...formData,
          [name]: value,
        });
      };
    
      useEffect(() => {
      }, [formData]);

      return {handleInputChanges,formData}
}

export default useForm;