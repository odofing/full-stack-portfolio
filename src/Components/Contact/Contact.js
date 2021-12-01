import React from 'react'
import Socials from '../Socials'
import './Contact.css'

function Contact() {
  return (
    <div>
      <section className='mt-5'>
        <div className='container'>
          <div className='row'>
            <form
              action='/contact'
              method='post'
              name='contact'
              className='col-md-6 m-auto'
            >
              <input type='hidden' name='form-name' value='contact' />
              <div className='card p-4  bg-light'>
                <h2 className='card-title text-center text-success'>
                  Get In Touch
                </h2>
                <div className='card-body'>
                  <div className='row'>
                    <div className='col-lg-12'>
                      <div className='form-group'>
                        <input
                          type='text'
                          className='form-control'
                          placeholder='Name'
                          name='name'
                          required
                        />
                      </div>
                    </div>
                    <div className='col-lg-12'>
                      <div className='form-group'>
                        <input
                          type='email'
                          className='form-control'
                          name='e-mail'
                          placeholder='Email'
                          required
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className='col-lg-12'>
                  <div className='form-group'>
                    <textarea
                      className='form-control'
                      name='message'
                      placeholder='Message'
                      required
                    ></textarea>
                  </div>
                </div>
                <div className='col-lg-12'>
                  <div className='form-group'>
                    <button
                      type='submit'
                      className='btn btn-success btn-block text-dark btn-lg'
                    >
                      SUBMIT{' '}
                    </button>
                  </div>
                </div>
              </div>
              <Socials />
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
