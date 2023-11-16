import React from 'react';
// import data
import { testimonials } from './data';
// import components
import ClientSlider from './ClientSlider';
import { useState } from 'react';


const Testimonials = () => {
  // destructure testimonials
  const { title, clients } = testimonials;

  // state for popup
  const [showPopup, setShowPopup] = useState(false);

  // state for feedback
  const [feedback, setFeedback] = useState({
    name: '',
    email: '',
    image: '',
    borderColor: '',
    message: '',
  });

  // handle input change
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFeedback((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // handle form submit
  const handleFormSubmit = (event) => {
    event.preventDefault();
    // TODO: handle form submission
    console.log(feedback);
    // reset feedback state
    // close popup
    setShowPopup(false);
  };

  return (
    <section className='section' id='testimonial'>
      <div className='container mx-auto'>
        {/* title */}
        <h2
          className='title mb-10 lg:mb-20 text-center max-w-[920px] mx-auto'
          data-aos='fade-up'
          data-aos-delay='200'
        >
          {title}
        </h2>

        {/* slider */}
        <div data-aos='fade-up' data-aos-delay='400'>
          <ClientSlider clients={clients} />
        </div>

        {/* write review button */}
        <button
          className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-10'
          onClick={() => setShowPopup(true)}
        >
          Write Review
        </button>

        {/* popup */}
        {showPopup && (
          <div className='fixed z-10 inset-0 overflow-y-auto bg-gray-900 bg-opacity-50'>
            <div className='flex items-center justify-center min-h-screen'>
              <div className='bg-white rounded-lg overflow-hidden max-w-md'>
                <div className='relative'>
                  {/* close button */}
                  <button
                    className='absolute top-0 right-0 m-4 text-gray-500 hover:text-gray-800'
                    onClick={() => setShowPopup(false)}
                  >
                    <svg
                      className='h-6 w-6 fill-current'
                      viewBox='0 0 24 24'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path d='M18 6L6 18M6 6l12 12' />
                    </svg>
                  </button>

                  {/* form */}
                  <form onSubmit={handleFormSubmit} className='p-8'>
                    <h3 className='text-lg font-medium mb-4'>Write a Review</h3>
                    <div className='mb-4 flex-col'>
                      <div className='mb-4 flex items-center'>
                        <label className='block text-gray-700 font-medium mb-2 w-1/4'>
                          Name
                        </label>
                        <input
                          type='text'
                          name='name'
                          value={feedback.name}
                          onChange={handleInputChange}
                          className='border border-gray-400 p-2 w-3/4 rounded'
                          required
                        />
                      </div>
                      <div className='mb-4 flex justify-center items-center'>
                        <label className='block text-gray-700 font-medium mb-2 w-1/4'>
                          Email
                        </label>
                        <input
                          type='email'
                          name='email'
                          value={feedback.email}
                          onChange={handleInputChange}
                          className='border border-gray-400 p-2 w-3/4 rounded'
                          required
                        />
                      </div>
                    </div>
                    <div className='mb-4 items-center'>
                      <label className='block text-gray-700 font-medium mb-2'>
                        Message
                      </label>
                      <textarea
                        name='message'
                        value={feedback.message}
                        onChange={handleInputChange}
                        className='border border-gray-400 p-2 w-full rounded'
                        required
                      ></textarea>
                    </div>
                    <button
                      type='submit'
                      className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
                    >
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Testimonials;
