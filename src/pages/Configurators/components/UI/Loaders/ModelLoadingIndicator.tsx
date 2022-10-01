import { Html } from '@react-three/drei'
import { InfinitySpin } from 'react-loader-spinner'

const ModelLoadingIndicator = () => {
	return (
		<Html center>
			<InfinitySpin color="white" />
		</Html>
	)
}

export default ModelLoadingIndicator
