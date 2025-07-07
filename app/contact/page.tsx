"use client"
import ContactForm from "@/components/contact/ContactForm"
import { useSiteConfig } from "@/contexts/SiteContext"
import {
	EnvelopeIcon,
	PhoneIcon,
	MapPinIcon,
} from "@heroicons/react/24/outline"
import Link from "next/link"


export default function ContactPage() {
	const siteConfig = useSiteConfig()

	return (
		<div className="container mx-auto px-4 py-8 place-content-center flex flex-col">
			<h1
				className={`text-3xl font-bold text-center mb-4 ${siteConfig.primaryColor}`}
			>
				Kontaktieren Sie uns!
			</h1>

			<div className="text-black white md:w-1/2 h-fit w-fit flex flex-col md:flex-row items-center ">
				<div className="space-y-3 min-w-full ">
					<ul className=" bg-white w-fit p-4 rounded-md pl-6">
						<li className="mb-4 flex items-center">
							<EnvelopeIcon className="w-5 h-5 mr-3 text-red-500" />
							<Link
								href={`mailto:${siteConfig.contact.email}`}
								className="hover:text-red-500"
								target="_blank"
							>
								{siteConfig.contact.email}
							</Link>
						</li>
						<li className="mb-4 flex items-center">
							<PhoneIcon className="w-5 h-5 mr-3 text-red-500" />
							<Link
								href={`tel:${siteConfig.contact.phone}`}
								className="hover:text-red-500"
								target="_blank"
							>
								{siteConfig.contact.phone}
							</Link>
						</li>
						<li className="mb-4 flex items-center">
							<MapPinIcon className="w-7 h-7 mr-3 text-red-500" />
							<Link
								href={siteConfig.contact.maps}
								className="hover:text-red-500"
								target="_blank"
							>
								{siteConfig.contact.address}
							</Link>
						</li>
					</ul>
				</div>
				<ContactForm />
			</div>
		</div>
	)
}
