/* eslint-disable react/prop-types */
import { usePlacePhoto } from '../hooks/usePhotoURL';
import placeholder from '../assets/placeholder.jpg'
import { Link } from 'react-router-dom';
const UserTripCard = ({trip}) => {
  const data = {
    textQuery: trip?.userSelection?.location?.label,
  };
  const photoURL = usePlacePhoto(trip, data);
  return trip && (
    <Link to={'/view-trip/'+trip?.id}> 
        <div className="cursor-pointer hover:scale-105 transition-all duration-200">
        <img src={photoURL? photoURL :placeholder} className='lg:w-[300px] lg:h-[250px] w-[180px] h-[135px] rounded-lg object-cover' alt="" />
        <div className='flex flex-col gap-1 my-3'>
          <h2 className='text-lg font-semibold'>{trip?.userSelection?.location?.label}</h2>
          <p className='text-sm text-gray-500'>{trip?.userSelection?.noOfDays} Days trip with {trip?.userSelection?.budget} Budget </p>
        </div>
    </div>
    </Link>

  )
}

export default UserTripCard