import React, { useState } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
// import { Link } from 'react-router-dom';
import ItemsCarousel from 'react-items-carousel';
// import { SRLWrapper } from 'simple-react-lightbox';

const Navigation = (props) => {
	const { experience } = props;
	const [activeItemIndex, setActiveItemIndex] = useState(0);
	const slideNumber = window.innerWidth < 992 ? 1 : 3;
	return (
		<div className='row'>
			<div className='col-lg-12'>
				{/* startslider */}
				<div style={{ padding: 0, maxWidth: '100%', margin: '0' }}>
					<ItemsCarousel
						infiniteLoop={true}
						gutter={12}
						activePosition={'center'}
						chevronWidth={60}
						disableSwipe={false}
						alwaysShowChevrons={true}
						numberOfCards={slideNumber}
						slidesToScroll={slideNumber}
						showSlither={false}
						enablePlaceholder={true}
						numberOfPlaceholderItems={slideNumber}
						firstAndLastGutter={false}
						rightChevron={'>'}
						leftChevron={'<'}
						requestToChangeActive={setActiveItemIndex}
						activeItemIndex={activeItemIndex}
						outsideChevron={false}
					>
						{experience.images.map((_, i) => (
							<div
								style={{
									height: 250,
									backgroundImage: `url(${process.env.PUBLIC_URL}/${experience.images[i].link})`,
									backgroundPosition: 'center',
									backgroundSize: 'cover',
								}}
							>
								{/* <SRLWrapper>
									<img
										style={{ display: 'none' }}
										alt={experience.images[i].title}
										src={
											process.env.PUBLIC_URL + '/' + experience.images[i].link
										}
									/>
								</SRLWrapper> */}
							</div>
						))}
					</ItemsCarousel>
				</div>
				{/* endslider */}
			</div>
		</div>
	);
};

export default Navigation;