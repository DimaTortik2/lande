import { ReactNode } from 'react'

interface IProps {
	children: ReactNode
	head: string
	headMultiply: number
	textMultiply: number
	selectedIdx: number
	mTop: number
	index: number
}

export function HeroContent({
	children,
	head,
	headMultiply,
	textMultiply,
	selectedIdx,
	mTop,
	index,
}: IProps) {
	const giveStyle = () => {
		// selected
		if (selectedIdx == index) {
			return { top: `${mTop}vh` }
			//start
		} else if (selectedIdx < index) {
			return { top: '100vh' }
			//end
		} else return { top: '-100vh' }
	}

	return (
		<div
			className={` my-text-transition  absolute z-2 flex flex-col justify-center items-center ${
				selectedIdx == index
					? 'text-stone-300 opacity-100 top-60'
					: 'text-stone-800 opacity-0 top-[-5em]'
			}`}
			style={giveStyle()}
		>
			<div
				style={{
					fontSize: `calc((1vh + 1vw) * ${headMultiply})`,
				}}
				className={
					'flex justify-center items-center p-2'
				}
			>
				{head}
			</div>
			<div
				style={{
					fontSize: `calc((1vh + 1vw) * ${textMultiply})`,
				}}
				className='p-4 w-full bg-[rgba(0,0,0,0.8)]'
			>
				{children}
			</div>
		</div>
	)
}
