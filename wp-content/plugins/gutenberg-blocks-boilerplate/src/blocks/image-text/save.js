import { useBlockProps, RichText } from '@wordpress/block-editor';

export default function save({ attributes }) {
	const { 
		title, 
		description, 
		link, 
		titleColor, 
		descriptionColor, 
		linkColor, 
		linkColorHover, 
		imageUrl, 
		imageFirst,
		paddingTopDesktop,
		paddingBottomDesktop,
		paddingTopTablet,
		paddingBottomTablet,
		paddingTopMobile,
		paddingBottomMobile   

	} = attributes;

	return (
		<div {...useBlockProps.save()}>
				<div className={`image-text__block ${imageFirst ? 'image-first' : ''}`}
					style={{
						'--paddingTopDesktop': `${paddingTopDesktop}px`,
						'--paddingBottomDesktop': `${paddingBottomDesktop}px`,
						'--paddingTopTablet': `${paddingTopTablet}px`,
						'--paddingBottomTablet': `${paddingBottomTablet}px`,
						'--paddingTopMobile': `${paddingTopMobile}px`,
						'--paddingBottomMobile': `${paddingBottomMobile}px`,
						'--linkColor': `${linkColor}`,
						'--linkColorHover': `${linkColorHover}`,
					}}
				>
					<div className="image-text__block__content">
						{/* Title */}
						<RichText.Content
						tagName="h3"
						value={title}
						style={{ color: titleColor }}
						/>

						{/* Description */}
						<RichText.Content
						tagName="p"
						value={description}
						style={{ color: descriptionColor }}
						/>
						{/* Link */}
						<div className="image-text__block__link">
							<RichText.Content
								tagName="a"
								className="image-text__block__link__tag"
								value={link}
							/>
							<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M0.75 6H11.25M11.25 6L6.375 10.875M11.25 6L6.375 1.125" stroke="#3C72FF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
							</svg>
						</div>
					</div>

					{/* Image */}
					{imageUrl && (
						<img 
						className="image-text__block__image"
						src={imageUrl} 
						/>
					)}
				</div>
        </div>
	);
}

