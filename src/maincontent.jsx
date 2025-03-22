import DevicesPage from './devices.jsx'
import TraffickPage from './traffick.jsx'
import DDOSPage from './ddos.jsx'
import DropPage from './drop.jsx'

export default function MainContent({content}) {
	// content = "Devices" | "Traffick" | "DDOS" | "Drop"

	if (content == "Devices") {
		return (
			<DevicesPage />
		)
	}
	if (content == "Traffick") {
		return (
			<TraffickPage />
		)
	}
	if (content == "DDOS") {
		return (
			<DDOSPage />
		)
	}
	if (content == "Drop") {
		return (
			<DropPage />
		)
	}

	return <p>{content}</p>
}
