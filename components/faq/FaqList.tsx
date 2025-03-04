// components/EventsList.tsx
import FaqCard from "./FaqCard"
import { Faq } from "../../contexts/FaqsContext"

const FaqList = ({ faqs }: { faqs: Faq[] }) => {
	return (
		<div className="grid grid-cols-1  gap-6">
			{faqs.map((faq: Faq) => (
				<FaqCard key={faq.id} faq={faq} />
			))}
		</div>
	)
}

export default FaqList
