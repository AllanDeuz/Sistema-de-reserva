import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
	CarouselControl,
	Carousel,
	CarouselItem,
	CarouselIndicators,
} from 'reactstrap';

function Carrusel() {

	// State for Active index
	const [activeIndex, setActiveIndex] = React.useState(0);

	// State for Animation
	const [animating, setAnimating] = React.useState(false);

	// Sample items for Carousel
    const items = [
        {
          src: require('../../img/piscina/slider/im3.jpg'),
          altText: 'Slide 1',
          header: 'Slide 1 Header'
        },
        {
          src: require('../../img/piscina/slider/im8.jpg'),
          altText: 'Slide 2',
          
          header: 'Slide 2 Header'
        },
        {
            src: require('../../img/piscina/slider/im11.JPG'),
          altText: 'Slide 3',
          
          header: 'Slide 3 Header'
        },
        {
            src: require('../../img/piscina/slider/im12.JPG'),
            altText: 'Slide 4',
            
            header: 'Slide 4 Header'
          },
          {
            src: require('../../img/piscina/slider/im2.jpg'),
            altText: 'Slide 5',
            
            header: 'Slide 5 Header'
          },
          {
            src: require('../../img/piscina/slider/im1.jpg'),
            altText: 'Slide 6',
            
            header: 'Slide 6 Header'
          },
          {
            src: require('../../img/piscina/slider/im7.jpg'),
            altText: 'Slide 7',
            
            header: 'Slide 7 Header'
          },
        
      ];

	// Items array length
	const itemLength = items.length - 1

	// Previous button for Carousel
	const previousButton = () => {
		if (animating) return;
		const nextIndex = activeIndex === 0 ?
			itemLength : activeIndex - 1;
		setActiveIndex(nextIndex);
	}

	// Next button for Carousel
	const nextButton = () => {
		if (animating) return;
		const nextIndex = activeIndex === itemLength ?
			0 : activeIndex + 1;
		setActiveIndex(nextIndex);
	}

	// Carousel Item Data
	const carouselItemData = items.map((item) => {
		return (
			<CarouselItem
				key={item.src}
				onExited={() => setAnimating(false)}
				onExiting={() => setAnimating(true)}
			>
				<img src={item.src} alt={item.altText} className="carrusel"/>
			</CarouselItem>
		);
	});

	return (
		<div style={{
			display: 'block', width: '50%', padding: 30, margin: 'auto', minWidth: '300px'
		}}>
			<Carousel previous={previousButton} next={nextButton}
				activeIndex={activeIndex}>
				<CarouselIndicators items={items}
					activeIndex={activeIndex}
					onClickHandler={(newIndex) => {
						if (animating) return;
						setActiveIndex(newIndex);
					}} />
				{carouselItemData}
				<CarouselControl directionText="Prev"
					direction="prev" onClickHandler={previousButton} />
				<CarouselControl directionText="Next"
					direction="next" onClickHandler={nextButton} />
			</Carousel>
		</div >
	);
}

export default Carrusel;
