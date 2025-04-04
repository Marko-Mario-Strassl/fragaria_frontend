// components/EventsList.tsx
import FaqCard from "./FaqCard"
import { Faq } from "../../contexts/FaqsContext"

const FaqList = ({ faqs }: { faqs: Faq[] }) => {
	return (
		<div className="grid grid-cols-1  gap-6">
			<FaqCard faqs={faqs} />
		</div>
	)
}

export default FaqList
