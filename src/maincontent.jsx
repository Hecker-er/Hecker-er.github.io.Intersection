import DevicesPage from './devices.jsx'
import TrafficPage from './traffic.jsx'
import DDOSPage from './ddos.jsx'
import DropPage from './drop.jsx'

export default function MainContent({content}) {
	// content = "Devices" | "Traffic" | "DDOS" | "Drop"

	if (content == "Devices") {
		return (
			<DevicesPage />
		)
	}
	if (content == "Traffic") {
		return (
			<TrafficPage />
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

	return (
		<div class="main-content">
			<p>{content}</p>
		</div>
	)
}
