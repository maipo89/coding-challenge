import { __ } from '@wordpress/i18n';
import {
  useBlockProps,
  InspectorControls,
  MediaUpload,
  RichText
} from '@wordpress/block-editor';
import { PanelBody, Button, ColorPicker, ToggleControl, RangeControl } from '@wordpress/components';
const { Fragment } = wp.element;

// editor style
import './editor.scss';

export default function Edit({ attributes, setAttributes }) {
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

  const TitleColor = (color) => setAttributes({ titleColor: color });
  const DescriptionColor = (color) => setAttributes({ descriptionColor: color });
  const LinkColor = (color) => setAttributes({ linkColor: color });
  const LinkColorHover = (color) => setAttributes({ linkColorHover: color });

  // Handle image selection
  const onSelectImage = (media) => {
    setAttributes({
      imageUrl: media.url,
    });
  };

  // Handle title change
  const onChangeTitle = (newTitle) => {
    setAttributes({ title: newTitle });
  };

  // Handle description change
  const onChangeDescription = (newDescription) => {
    setAttributes({ description: newDescription });
  };

  // Handle link change
  const onChangeLink = (newLink) => {
    setAttributes({ link: newLink });
  };

  return (
    <Fragment>
      <InspectorControls>
        <PanelBody title={__('Image Settings', 'custom-blocks')} initialOpen={true}>
		  <p className="image-text__image__upload">{__('Image', 'custom-blocks')}</p>
          <MediaUpload
            onSelect={onSelectImage}
            type="image"
            value={imageUrl}
            render={({ open }) => (
			  <>
			  {imageUrl && (
				<div className="image-text__image__preview" style={{ marginTop: '10px' }}>
				  <img
					src={imageUrl}
					alt={__('Selected Image', 'custom-blocks')}
					style={{ maxWidth: '100%', height: 'auto' }}
				  />
				</div>
			  )}
			  <Button isPrimary onClick={open}>
                {__('Select Image', 'custom-blocks')}
              </Button>
			  </>
			)}
            />
			<ToggleControl
				label={__('Image First', 'custom-blocks')}
				checked={attributes.imageFirst}
				onChange={(newValue) => setAttributes({ imageFirst: newValue })}
			/>
		    <p class="image-text__title-color">{__('Title Color', 'custom-blocks')}</p>
			<ColorPicker
				color={titleColor}
				onChangeComplete={(value) => TitleColor(value.hex)}
				disableAlpha
			/>
            <p>{__('Description Color', 'custom-blocks')}</p>
		    <ColorPicker
				color={descriptionColor}
				onChangeComplete={(value) => DescriptionColor(value.hex)}
				disableAlpha
			/>
            <p>{__('Link Color', 'custom-blocks')}</p>
			<ColorPicker
				color={linkColor}
				onChangeComplete={(value) => LinkColor(value.hex)}
				disableAlpha
			/>
			<p>{__('Link Color Hover', 'custom-blocks')}</p>
			<ColorPicker
				color={linkColorHover}
				onChangeComplete={(value) => LinkColorHover(value.hex)}
				disableAlpha
			/>

		    <p>{__('Desktop Top Margin', 'custom-blocks')}</p>
			<RangeControl
				value={paddingTopDesktop}
				onChange={(value) => setAttributes({ paddingTopDesktop: value })}
				min={0}
				max={200}
				step={1}
				help={__('Set the top margin for desktop view')}
			/>

			<p>{__('Desktop Bottom Margin', 'custom-blocks')}</p>
			<RangeControl
				value={paddingBottomDesktop}
				onChange={(value) => setAttributes({ paddingBottomDesktop: value })}
				min={0}
				max={200}
				step={1}
				help={__('Set the bottom margin for desktop view')}
			/>

			<p>{__('Tablet Top Margin', 'custom-blocks')}</p>
			<RangeControl
				value={paddingTopTablet}
				onChange={(value) => setAttributes({ paddingTopTablet: value })}
				min={0}
				max={200}
				step={1}
				help={__('Set the top margin for tablet view')}
			/>

			<p>{__('Tablet Bottom Margin', 'custom-blocks')}</p>
			<RangeControl
				value={paddingBottomTablet}
				onChange={(value) => setAttributes({ paddingBottomTablet: value })}
				min={0}
				max={200}
				step={1}
				help={__('Set the bottom margin for tablet view')}
			/>

			<p>{__('Mobile Top Margin', 'custom-blocks')}</p>
			<RangeControl
				value={paddingTopMobile}
				onChange={(value) => setAttributes({ paddingTopMobile: value })}
				min={0}
				max={200}
				step={1}
				help={__('Set the top margin for mobile view')}
			/>

			<p>{__('Mobile Bottom Margin', 'custom-blocks')}</p>
			<RangeControl
				value={paddingBottomMobile}
				onChange={(value) => setAttributes({ paddingBottomMobile: value })}
				min={0}
				max={200}
				step={1}
				help={__('Set the bottom margin for mobile view')}
			/>
        </PanelBody>
      </InspectorControls>

      <div {...useBlockProps()}>
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
			<div class="image-text__block__content">
				{/* Title */}
				<RichText
					tagName="h3"
					value={title}
					onChange={onChangeTitle}
					placeholder={__('Enter title...', 'custom-blocks')}
					style={{ color: titleColor }}
				/>

				{/* Description */}
				<RichText
					tagName="p"
					value={description}
					onChange={onChangeDescription}
					placeholder={__('Enter description...', 'custom-blocks')}
					style={{ color: descriptionColor }}
				/>

				{/* Link */}
				<div class="image-text__block__link">
					<RichText
						tagName="a"
						className="image-text__block__link__tag"
						value={link}
						onChange={onChangeLink}
						placeholder={__('Enter Link...', 'custom-blocks')}
					/>
					<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M0.75 6H11.25M11.25 6L6.375 10.875M11.25 6L6.375 1.125" stroke="#3C72FF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
					</svg>
				</div>
			</div>

			{/* Image */}
			{imageUrl && <img 
			              class="image-text__block__image"
			              src={imageUrl} 
						  alt={__('Selected Image', 'custom-blocks')} />}
		</div>
      </div>
    </Fragment>
  );
}