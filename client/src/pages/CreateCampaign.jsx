import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ethers } from 'ethers';

import { money } from '../assets';
import { CustomButton, FormField } from '../components';
import { checkIfImage } from '../utils';

const CreateCampaign = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [form, setForm] = useState({
    name: '',
    title: '',
    description: '',
    target: '',
    deadline: '',
    image: ''
  });

  const handleFormFieldChage = (fieldName, e) => {
    setForm({ ...form, [fieldName] : e.target.value })
  } 

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  }

  return (
    <div className="bg-[#1c1c24] flex justify-center items-center flex-col rounded-[10px] p-10 p-4">
      {isLoading && 'Loader...'}
      <div className="flex justify-center items-center p-[16px] min-w-[380px] bg-[#3a3a43] rounded-[10px]">
        <h1 className="font-epilogue font-bold text-[25px] leading-[38px] text-white">
          Start a Campaign
        </h1>
      </div>
      <form onSubmit={handleSubmit} className="w-full mt-[65px] flex flex-col gap-[30px]">
        <div className="flex flex-wrap gap-[40px]">
          <FormField 
              labelName="Your Name *"
              placeholder="Mohamed Faraj"
              inputType="text"
              value={form.name}
              handleChange={(e) => handleFormFieldChage
              ('name', e)} 
          />
          <FormField 
              labelName="Campaign Title *"
              placeholder="Give a title for your campaign"
              inputType="text"
              value={form.title}
              handleChange={(e) => handleFormFieldChage
                ('title', e)}  
          />
        </div>
          <FormField 
              labelName="Story *"
              placeholder="Write your Story"
              isTextArea
              value={form.description}
              handleChange={(e) => handleFormFieldChage
                ('description', e)}  
          />
          <div className="w-full flex justify-center items-center p-4 bg-[#8c6dfd] h-[120px] rounded-[10px]">
            <img 
              src={money}
              alt="money"
              className="w-[40px] h-[40px] object-contain" />
              <h4 className="font-epilogue font-bold text-[25px] text-white ml-[20px]">
                You will get 100% of the raised amount.
              </h4>
          </div>
          <div className="flex flex-wrap gap-[40px]">
          <FormField 
              labelName="Goal *"
              placeholder="ETH 0.50"
              inputType="text"
              value={form.target}
              handleChange={(e) => handleFormFieldChage
                ('target', e)}  
          />
          <FormField 
              labelName="End Date *"
              placeholder="End Date"
              inputType="date"
              value={form.deadline}
              handleChange={(e) => handleFormFieldChage
                ('deadline', e)}  
          />
          </div>
          <FormField 
              labelName="Campaign Image *"
              placeholder="Paste iamge URL of your campaign"
              inputType="url"
              value={form.image}
              handleChange={(e) => handleFormFieldChage
                ('image', e)}  
          />
        
        <div className="flex justify-center items-center mt[40px]">
            <CustomButton 
                btnType="submit"
                title="Submit Your Campaign"
                styles="bg-[#1dc071]" 
            />
        </div>
      </form>
    </div>
  )
}

export default CreateCampaign
