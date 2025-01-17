/**
 * WordPress dependencies
 */
import {
	ComplementaryArea,
	ComplementaryAreaMoreMenuItem,
} from '@wordpress/interface';
import { useSelect } from '@wordpress/data';
import { store as preferencesStore } from '@wordpress/preferences';

export default function DefaultSidebar( {
	className,
	identifier,
	title,
	icon,
	children,
	closeLabel,
	header,
	headerClassName,
	panelClassName,
} ) {
	const showIconLabels = useSelect(
		( select ) =>
			!! select( preferencesStore ).get(
				'core/edit-site',
				'showIconLabels'
			),
		[]
	);

	return (
		<>
			<ComplementaryArea
				className={ className }
				scope="core/edit-site"
				identifier={ identifier }
				title={ title }
				smallScreenTitle={ title }
				icon={ icon }
				closeLabel={ closeLabel }
				header={ header }
				headerClassName={ headerClassName }
				panelClassName={ panelClassName }
				showIconLabels={ showIconLabels }
			>
				{ children }
			</ComplementaryArea>
			<ComplementaryAreaMoreMenuItem
				scope="core/edit-site"
				identifier={ identifier }
				icon={ icon }
			>
				{ title }
			</ComplementaryAreaMoreMenuItem>
		</>
	);
}
