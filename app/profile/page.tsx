'use client'

import { ChangeEventHandler, useEffect, useState } from "react";

const initialProfile = {
  id: "",
  rank: "",
  surname: "",
  firstName: "",
  appointment: "",
  signature: "",
};

export default function Profile() {
  const [profile, setProfile] = useState(initialProfile);

  useEffect(() => {
    const savedProfile = localStorage.getItem('profile');
    if (savedProfile) {
      setProfile(JSON.parse(savedProfile));
    }
  }, []);

  useEffect(() => {
    if (profile != initialProfile) {
      localStorage.setItem('profile', JSON.stringify(profile));
    }
  }, [profile]);

  const handleInputChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const { name, value } = e.target;
    setProfile(prevFields => ({
      ...prevFields,
      [name]: value
    }));

  };

  return (
    <div className="prose dark:prose-invert">
      <div className="flex flex-col gap-2">
        <h1 className="pt-6">Profile</h1>
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <div className="text-lg">AAC ID</div>
            <input
              className="rounded-lg p-3 prose dark:prose-invert"
              type="text"
              onChange={handleInputChange}
              name="id"
            />
          </div>
          <div className="flex flex-col gap-2">
            <div className="text-lg">Rank</div>
            <input
              className="rounded-lg p-3 prose dark:prose-invert"
              type="text"
              onChange={handleInputChange}
              name="rank"
            />
          </div>
          <div className="flex flex-col gap-2">
            <div className="text-lg">Appointment</div>
            <input
              className="rounded-lg p-3 prose dark:prose-invert"
              type="text"
              onChange={handleInputChange}
              name="appointment"
            />
          </div>
          <div className="flex flex-col gap-2">
            <div className="text-lg">Last name</div>
            <input
              className="rounded-lg p-3 prose dark:prose-invert"
              type="text"
              onChange={handleInputChange}
              name="surname"
            />
          </div>
          <div className="flex flex-col gap-2">
            <div className="text-lg">First name</div>
            <input
              className="rounded-lg p-3 prose dark:prose-invert"
              type="text"
              onChange={handleInputChange}
              name="firstName"
            />
          </div>
          <div className="flex flex-col gap-2">
            <div className="text-lg">Signature</div>
            <input
              className="rounded-lg p-3 prose dark:prose-invert"
              type="text"
              onChange={handleInputChange}
              name="signature"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
