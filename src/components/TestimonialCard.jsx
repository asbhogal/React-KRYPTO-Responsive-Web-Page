import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode, Pagination, Thumbs, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import testimonialData from '@/js/testimonialData';

const TestimonialCard = () => {
    return (
        <Swiper
            modules={ [Autoplay, FreeMode, Pagination, Thumbs, A11y] }
            spaceBetween={ 50 }
            pagination={{ clickable: true }}
            autoplay={ true }
            loop={ true }
            freeMode={ true }

            breakpoints = {{
                1440: {
                    slidesPerView: 3
                },
                1024: {
                    slidesPerView: 3
                },
                744: {
                    slidesPerView: 2,
                },
                375: {
                    slidesPerView: 1
                }
            }}
        >

        { testimonialData.map(user => (
            <SwiperSlide className="TestimonialCard" key={ user.id }>
                <div>
                    <img className="TestimonialImage" src={ `/assets/images/TestimonialImg-${ user.img }` }></img>
                    <div className='TestimonialBody'>
                        <p className="TestimonialQuote">{ user.description }</p>
                        <p className="TestimonialName">{ user.name }</p>
                    </div>
                </div>
            </SwiperSlide>
        )) }
        </Swiper>
    );
  };

export default TestimonialCard;