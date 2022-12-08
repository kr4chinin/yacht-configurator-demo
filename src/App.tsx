import { BrowserRouter } from 'react-router-dom'
import AppRouter from './AppRouter'
import { configure } from 'mobx'

setTimeout(() => {
	configure({
		enforceActions: 'never',
		reactionScheduler: f => setTimeout(f)
	})
})

const App = () => {
	return (
		<BrowserRouter>
			<AppRouter />
		</BrowserRouter>
	)
}

export default App
