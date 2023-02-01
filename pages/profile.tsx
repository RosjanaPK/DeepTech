// import Link from 'next/link';
import countries from '@data/contries.json';
import info from '@data/info.json';
import { UserAddress, UserInformation } from 'types';
import { useState } from 'react';

const Profile = () => {
  const inputStyle = 'rounded py-1 px-2 border-2 border-gray-300';

  const [regAddress, setRegAddress] = useState<UserAddress>({
    address: info[0].totaladdress.address,
    country: info[0].totaladdress.country,
    province: info[0].totaladdress.province,
    state: info[0].totaladdress.state,
    postalCode: info[0].totaladdress.code,
  });

  const [regData, setRegData] = useState<UserInformation>({
    firstName: info[0].firstname,
    lastName: info[0].lastname,
    email: info[0].email,
    phoneNumber: info[0].phone,
    agreeToTerm: false,
    address: regAddress,
  });
  const [isActive, setisActive] = useState({
    active: false,
  });

  const handleSubmit = () => {
    console.log(regData);
    
    setisActive((prevState) => ({
      ...prevState,
      active: false,
    }));
    //ปักไว้ก่อน
    // setRegData((prevState) => ({
    //   ...prevState,
    //   agreeToTerm: !regData.agreeToTerm
    // }));

  };
  const editSubmit = () => {
    console.log('edit');

    setisActive((prevState) => ({
      ...prevState,
      active: true,
    }));

  };

  return (
    <div className="h-[100vh] w-full">
      <div className="w-full h-full flex justify-center items-center">
        <div className="px-10 py-10 bg-gray-100 rounded-md flex flex-col justify-center items-center space-y-8">
          <h4 className="text-3xl font-bold text-gray-600">CiRA Profile</h4>
          <div className={`${isActive.active ? 'hidden' : ''}`}>
            <div className="flex flex-col space-y-2 ">
              <div className="flex space-x-4">
                <div className="flex flex-col w-full">
                  <label className='px-4 py-2 font-semibold'>First Name</label>
                  <div className="px-4 py-2">{regData.firstName}</div>
                </div>
                <div className="flex flex-col w-full">
                  <label  className='px-4 py-2 font-semibold'>Last name</label>
                  <div className="px-4 py-2">{regData.lastName}</div>
                </div>
              </div>

              <div className="flex flex-col w-full">
                <label  className='px-4 py-2 font-semibold'>Email</label>
                <div className="px-4 py-2">{regData.email}</div>
              </div>
              <div className="flex flex-col w-full">
                <label  className='px-4 py-2 font-semibold'>Phone Number</label>
                <div className="px-4 py-2">{regData.phoneNumber}</div>
              </div>
              <div className="flex flex-col w-full">
                <label  className='px-4 py-2 font-semibold'>Address</label>
                <div className="px-4 py-2">{regData.address.address}</div>
              </div>
   
              <div className="flex space-x-4">
                <div className="flex flex-col w-full">
                  <label className='px-4 py-2 font-semibold'>Country</label>
                  <div className="px-4 py-2">{regData.address.country}</div>
                </div>
                <div className="flex flex-col w-full">
                  <label  className='px-4 py-2 font-semibold'>State</label>
                  <div className="px-4 py-2">{regData.address.state}</div>
                </div>
              </div>
              <div className="flex space-x-4">
                <div className="flex flex-col w-full">
                  <label className='px-4 py-2 font-semibold'>Province</label>
                  <div className="px-4 py-2">{regData.address.province}</div>
                </div>
                <div className="flex flex-col w-full">
                  <label  className='px-4 py-2 font-semibold'>Pastol Code</label>
                  <div className="px-4 py-2">{regData.address.postalCode}</div>
                </div>
              </div>

              <div className="flex space-x-4">
                <div className="flex flex-col w-full">
                <a className='px-4 py-2 font-semibold'>status</a>
                <a className='px-4 py-2 font-semibold'>Remining 356 Days</a>
                </div>
                <div className="flex flex-col w-full">
                  <label  className='px-4 py-2 font-semibold'>ลบโปรไฟล์จ้า</label>
                
                </div>
              </div>
              <button
                className="py-2 bg-slate-600 rounded text-white font-semibold disabled:opacity-50"
                onClick={editSubmit}
              >
                Edit Profile
              </button>
            </div>
          </div>
          <div className={`${isActive.active ? '' : 'hidden'}`}>
            <div className="flex flex-col space-y-2 ">
              <div className="flex space-x-4">
                <div className="flex flex-col w-full">
                  <label>First Name</label>
                  <input
                    type="text"
                    className={inputStyle}
                    value={regData.firstName}
                    onChange={(e) =>
                      setRegData((prevState) => ({
                        ...prevState,
                        firstName: e.target.value,
                      }))
                    }
                  />
                </div>

                <div className="flex flex-col w-full">
                  <label>Last Name</label>
                  <input
                    type="text"
                    className={inputStyle}
                    value={regData.lastName}
                    onChange={(e) =>
                      setRegData((prevState) => ({
                        ...prevState,
                        lastName: e.target.value,
                      }))
                    }
                  />
                </div>
              </div>

              <label>Email</label>
              <input
                type="text"
                className={inputStyle}
                value={regData.email}
                onChange={(e) =>
                  setRegData((prevState) => ({
                    ...prevState,
                    email: e.target.value,
                  }))
                }
              />

              <label>Phone Number</label>
              <input
                type="text"
                className={inputStyle}
                value={regData.phoneNumber}
                onChange={(e) =>
                  setRegData((prevState) => ({
                    ...prevState,
                    phoneNumber: e.target.value,
                  }))
                }
              />

              <label>Address</label>
              <input
                type="text"
                className={inputStyle}
                value={regAddress.address}
                onChange={(e) => {
                  setRegAddress((prevState) => ({
                    ...prevState,
                    address: e.target.value,
                  }));
                  setRegData((prevState) => ({
                    ...prevState,
                    address: regAddress,
                  }));
                }}
              />

              <div className="flex space-x-4">
                <div className="flex flex-col">
                  <label>Country</label>
                  <select
                    name="country"
                    value={regAddress.country}
                    className="rounded p-[0.475rem] border-2 border-gray-300 w-full"
                    // value={info[0].totaladdress.country}
                    onChange={(e) => {
                      setRegAddress((prevState) => ({
                        ...prevState,
                        country: e.target.value,
                      }));

                      const newcountry = regAddress;
                      newcountry.country = e.target.value;
                      setRegData((prevState) => ({
                        ...prevState,
                        address: newcountry,
                      }));
                    }}
                  >
                    {countries.map((item: { country: string }, i: number) => (
                      <option value={item.country} key={i}>
                        {item.country}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="flex flex-col">
                  <label>State</label>
                  <input
                    type="text"
                    className={inputStyle}
                    value={regAddress.state}
                    onChange={(e) => {
                      setRegAddress((prevState) => ({
                        ...prevState,
                        state: e.target.value,
                      }));
                      setRegData((prevState) => ({
                        ...prevState,
                        address: regAddress,
                      }));
                    }}
                  />
                </div>
              </div>

              <div className="flex space-x-4">
                <div className="flex flex-col w-full">
                  <label>Province</label>
                  <input
                    type="text"
                    className={inputStyle}
                    value={regAddress.province}
                    onChange={(e) => {
                      setRegAddress((prevState) => ({
                        ...prevState,
                        province: e.target.value,
                      }));
                      setRegData((prevState) => ({
                        ...prevState,
                        address: regAddress,
                      }));
                    }}
                  />
                </div>

                <div className="flex flex-col w-full">
                  <label>Postal Code</label>
                  <input
                    type="text"
                    className={inputStyle}
                    value={regAddress.postalCode}
                    onChange={(e) => {
                      setRegAddress((prevState) => ({
                        ...prevState,
                        postalCode: e.target.value,
                      }));
                      setRegData((prevState) => ({
                        ...prevState,
                        address: regAddress,
                      }));
                    }}
                  />
                </div>
              </div>

              <div className="flex space-x-2 py-2">
                <input
                  type="checkbox"
                  className="checked:bg-blue-500"
                  onClick={() => {
                    setRegData((prevState) => ({
                      ...prevState,
                      agreeToTerm: !regData.agreeToTerm,
                    }));
                  }}
                />
                <p>
                  {' '}
                  
                    confirm to edit
                  
                </p>
              </div>

              <button
                className="py-2 bg-slate-600 rounded text-white font-semibold disabled:opacity-50"
                onClick={handleSubmit}
                disabled={!regData.agreeToTerm}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
