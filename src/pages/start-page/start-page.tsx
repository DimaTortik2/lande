import { Swiper, SwiperSlide } from 'swiper/react'
import { Parallax, Mousewheel } from 'swiper/modules'
import { useState } from 'react'
import { HeroContent } from '../../widgets/hero'
export function StartPage() {
	const [selectedIdx, setSelectedIdx] = useState<number>(0)

	return (
		<>
			<div className='pointer-events-none'>
				<HeroContent
					headMultiply={6}
					textMultiply={2}
					selectedIdx={selectedIdx}
					mTop={0}
					index={0}
					head={'Ночь'}
				>
					<p>
						Ночь над городом снова сгустилась,
						<br />
						Тьмой окутаны улочки вновь,
						<br />И как будто в ней что-то случилось,
						<br />И застыла внутри будто кровь.
					</p>
				</HeroContent>

				<HeroContent
					headMultiply={5}
					textMultiply={2}
					selectedIdx={selectedIdx}
					mTop={0}
					index={1}
					head={'День, час, минута'}
				>
					<p>
						Что было то уже не поменять
						<br />И не надо с разворота смотреть назад
						<br />
						Предлагаю этого не замечать <br />
						Просто вынести урок и продолжить шаг
					</p>
				</HeroContent>

				<HeroContent
					headMultiply={6}
					textMultiply={2}
					selectedIdx={selectedIdx}
					mTop={0}
					index={2}
					head={'Колледж'}
				>
					<p>
						А я пыль подниму — хлоркой пол протеру
						<br />
						Тараканов в пакет соберу
						<br />
						Пожалейте меня, я ужасно живу <br />
						Только плакать охота порой
					</p>
				</HeroContent>
			</div>

			<Swiper
				modules={[Parallax, Mousewheel]}
				speed={1700}
				mousewheel={true}
				spaceBetween={50}
				slidesPerView={1}
				onSlideChange={swiper => setSelectedIdx(swiper.activeIndex)}
				onSwiper={swiper => console.log(swiper)}
				parallax={true}
				direction='vertical'
				className='h-full w-full bg-black'
			>
				{[1, 2, 3].map(number => {
					console.log(number)

					return (
						<SwiperSlide
							key={number}
							className='bg-black overflow-hidden size-effect'
						>
							<div
								data-swiper-parallax='35%'
								style={{
									backgroundImage: `url(/slide${number}-back.jpg`,
								}}
								className='bg-no-repeat bg-center bg-cover absolute inset-0'
							></div>
							<div
								data-swiper-parallax='25%'
								style={{
									backgroundImage: `url(/slide${number}-middle.png`,
								}}
								className='bg-no-repeat bg-center bg-cover absolute inset-0'
							></div>
							<div
								style={{
									backgroundImage: `url(/slide${number}-front.png`,
								}}
								data-swiper-parallax='15%'
								className='bg-no-repeat bg-center bg-cover absolute inset-0'
							></div>
						</SwiperSlide>
					)
				})}
			</Swiper>
		</>
	)
}
