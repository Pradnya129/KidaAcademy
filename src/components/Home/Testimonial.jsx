import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Navigation, Autoplay } from 'swiper/modules';
import { Container, Row} from 'react-bootstrap';
import './Testimonial.css';

const testimonials = [
  {
    id: "1",
    parentName: "John Smith",
    parentDesignation: "UI/UX Designer",
    icon: "img/testimonial_icon_01.jpg",
    img: "img/testimonial_01.jpg",
    text: "Professionally predominate timely infrastructures top-line methodologies. Collaboratively seize scalable channels before long-term high impact.",
    color: "warning",
    borderstyle: "2px solid #ffc00f"
  },
  {
    id: "2",
    parentName: "Jane Doe",
    parentDesignation: "Web Developer",
    icon: "img/testimonial_icon_02.jpg",
    img: "img/testimonial_02.jpg",
    text: "Professionally predominate timely infrastructures top-line methodologies. Collaboratively seize scalable channels before long-term high impact.",
    color: "tomato",
    borderstyle: "2px solid #e84b3a"
  },
  {
    id: "3",
    parentName: "Alice Johnson",
    parentDesignation: "Software Engineer",
    icon: "img/testimonial_icon_03.jpg",
    img: "img/testimonial_03.jpg",
    text: "Professionally predominate timely infrastructures top-line methodologies. Collaboratively seize scalable channels before long-term high impact.",
    color: "orange",
    borderstyle: "2px solid #fc7f0c"
  },
  {
    id: "4",
    parentName: "John Smith",
    parentDesignation: "UI/UX Designer",
    icon: "img/testimonial_icon_01.jpg",
    img: "img/testimonial_01.jpg",
    text: "Professionally predominate timely infrastructures top-line methodologies. Collaboratively seize scalable channels before long-term high impact.",
    color: "warning",
    borderstyle: "2px solid #ffc00f"
  },
  {
    id: "5",
    parentName: "Jane Doe",
    parentDesignation: "Web Developer",
    icon: "img/testimonial_icon_02.jpg",
    img: "img/testimonial_02.jpg",
    text: "Professionally predominate timely infrastructures top-line methodologies. Collaboratively seize scalable channels before long-term high impact.",
    color: "tomato",
    borderstyle: "2px solid #e84b3a"
  },
  {
    id: "6",
    parentName: "Alice Johnson",
    parentDesignation: "Software Engineer",
    icon: "img/testimonial_icon_03.jpg",
    img: "img/testimonial_03.jpg",
    text: "Professionally predominate timely infrastructures top-line methodologies. Collaboratively seize scalable channels before long-term high impact.",
    color: "orange",
    borderstyle: "2px solid #fc7f0c"
  }
];

function Testimonial() {
  return (
    <div className="testimonial swiper-container position-relative my-5">
      <Container>
        <Row className='pb-5'>
          <h3 className='text-purple text-center ff-bubblegum fw-bold fs-40'>What Parents Say</h3>
          <p className='fs-6 text-center mt-2 px-250' style={{ color: '#707070' }}>
            Rapidiously expedite granular imperatives before economically sound web services. Credibly actualize pandemic strategic theme platforms.
          </p>
        </Row>
        <Swiper
          modules={[Navigation, Autoplay]}
          slidesPerView={3}
          spaceBetween={60}
          loop={true}
          scrollbar={{ draggable: true }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            reverseDirection: true
          }}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          breakpoints={{
            200:{slidesPerView:1 },
            320: { slidesPerView: 1 },
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 }
          }}
        >
          {testimonials.map((item) => (
            <SwiperSlide key={item.id} className='px-xs-3'>
              <div className="swiper-item rounded" style={{ border: item.borderstyle }}>
                <div className="testimonial-details h-auto p-4 text-grey fs-6 ff-roboto">
                  <p className='ff-roboto'>{item.text}</p>
                  <h4 className={`ff-bubblegum text-${item.color}`}>
                    {item.parentName}
                    <span className='fs-6 text-grey'> {item.parentDesignation}</span>
                  </h4>
                  <img src={item.icon} alt="testimonial_icon" loading="lazy"  className='testimonial_icon' />
                </div>
              </div>
              <div className="testimonial-img" style={{ border: item.borderstyle }}>
                <img src={item.img} alt="testimonial" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="swiper-button-prev d-md-block d-none"></div>
        <div className="swiper-button-next d-md-block d-none"></div>
      </Container>
    </div>
  );
}

export default Testimonial;
