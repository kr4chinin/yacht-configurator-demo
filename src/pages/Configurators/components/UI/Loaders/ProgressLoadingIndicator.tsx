import PageLoadingIndicator from '../PageLoadingIndicator'
import 'nprogress/nprogress.css'
import NProgress from 'nprogress'
import { useEffect } from 'react'

const ProgressLoadingIndicator = () => {
	useEffect(() => {
		NProgress.configure({ showSpinner: false })

		const intervalId = setInterval(() => {
			NProgress.inc(0.008)
		}, 150)

		return () => {
			NProgress.done()
			clearInterval(intervalId)
		}
	})

	return <PageLoadingIndicator />
}

export default ProgressLoadingIndicator
