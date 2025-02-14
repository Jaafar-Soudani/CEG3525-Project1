import Image from 'next/image'
export default function Page() {

    const lawyers: {image: string, name:string, desc:string}[] = [
        {
          image: "/lawyer6.webp",
          name: "Thurman Matthews",
          desc: "Thurman Matthews, a leading figure in civil rights law, became the first African American Justice on the Supreme Court. He is best known for his victory in the case Jackson v. Rivers, which successfully challenged discriminatory hiring practices in the public sector. Matthews completed his BA at Liberty College and his LLB from Redstone University School of Law, where he was deeply involved in student-led civil rights initiatives."
        },
        {
          image: "/lawyer5.webp",
          name: "Eliza Ford",
          desc: "Eliza Ford is a trailblazer in women's rights law and was appointed as the first female justice to the Supreme Court. Her most famous case, Taylor v. International Corp., fought for gender equality in the corporate world and became a hallmark decision in labor law. Ford graduated with honors from Sequoia University and received her LLB from Crestwood Law School, where she was president of the women's legal association."
        },
        {
          image: "/lawyer4.webp",
          name: "Grace Montgomery",
          desc: "Grace Montgomery, known for her work in criminal defense, was appointed to the Supreme Court for her innovative rulings on due process. She is best remembered for Jones v. The State, a case that set new precedents in the protection of rights for criminal defendants. Montgomery earned her undergraduate degree from Summit College and her JD from Greenfield Law School, where she was valedictorian."
        },
        {
          image: "/lawyer3.webp",
          name: "Lucas Sullivan",
          desc: "Lucas Sullivan made a name for himself as a prominent advocate for corporate law, successfully defending numerous multinational companies in high-profile cases. His work in Sullivan v. Redstar Ltd. is regarded as a pivotal moment in corporate liability. Sullivan earned his BA from Eastwood College and his LLB from Sterling Law School, where he was known for his debate and public speaking skills."
        },
        {
          image: "/lawyer2.webp",
          name: "Adrian Clarke",
          desc: "Adrian Clarke is a notable figure in criminal defense, particularly known for his role in the case Brock v. The People, which challenged unlawful police conduct during an arrest. Clarke received his BA from Crestwood University and his JD from Summit Law School, where he participated in several pro bono legal clinics."
        },
        {
          image: "/lawyer1.webp",
          name: "Jasper Blackwell",
          desc: "Jasper Blackwell is a respected litigator in international law, specializing in cases related to environmental protection. His most influential case, Evergreen v. Union Corp., set a global precedent for corporate responsibility in environmental damages. Blackwell completed his undergraduate studies at Liberty College and his JD at Redstone University, where he focused on international legal systems."
        }
      ]
      
  return (
    <div>
        <div className="flex flex-col mx-4 mt-5 gap-5">
            <div className="mx-auto text-center text-3xl font-bold">
                Our Team
            </div>
            <div className="flex flex-col mx-auto px-2 gap-10  pb-72 mt-12">
                <div className="flex flex-row justify-between gap-10 px-10">
                    <div className="flex flex-row w-1/2">
                        <Image
                        src={lawyers[0].image}
                        width="300"
                        height="300"
                        alt={lawyers[0].name}
                        style={{ objectFit: 'contain' }}
                        />
                        <div className="flex flex-col ml-2">
                            <span className="text-xl font-semibold">
                                {lawyers[0].name}
                            </span>
                            <span className="ml-4">
                                {lawyers[0].desc}
                            </span>
                        </div>
                    </div>

                    <div className="flex flex-row-reverse w-1/2">
                        <Image
                        src={lawyers[3].image}
                        width="300"
                        height="300"
                        alt={lawyers[3].name}
                        style={{ objectFit: 'contain' }}
                        />
                        <div className="flex flex-col mr-2">
                            <span className="text-xl font-semibold">
                                {lawyers[3].name}
                            </span>
                            <span className="mr-4">
                                {lawyers[3].desc}
                            </span>
                        </div>
                    </div>

                </div>
                <div className="flex flex-row justify-between gap-10 px-10">
                    <div className="flex flex-row w-1/2">
                        <Image
                        src={lawyers[4].image}
                        width="300"
                        height="300"
                        alt={lawyers[4].name}
                        style={{ objectFit: 'contain' }}
                        />
                        <div className="flex flex-col ml-2">
                            <span className="text-xl font-semibold">
                                {lawyers[4].name}
                            </span>
                            <span className="ml-4">
                                {lawyers[4].desc}
                            </span>
                        </div>
                    </div>

                    <div className="flex flex-row-reverse w-1/2">
                        <Image
                        src={lawyers[1].image}
                        width="300"
                        height="300"
                        alt={lawyers[1].name}
                        style={{ objectFit: 'contain' }}
                        />
                        <div className="flex flex-col mr-2">
                            <span className="text-xl font-semibold">
                                {lawyers[1].name}
                            </span>
                            <span className="mr-4">
                                {lawyers[1].desc}
                            </span>
                        </div>
                    </div>

                </div>

                <div className="flex flex-row justify-between gap-10 px-10">
                    <div className="flex flex-row w-1/2">
                        <Image
                        src={lawyers[2].image}
                        width="300"
                        height="300"
                        alt={lawyers[2].name}
                        style={{ objectFit: 'contain' }}
                        />
                        <div className="flex flex-col ml-2">
                            <span className="text-xl font-semibold">
                                {lawyers[2].name}
                            </span>
                            <span className="ml-4">
                                {lawyers[2].desc}
                            </span>
                        </div>
                    </div>

                    <div className="flex flex-row-reverse w-1/2">
                        <Image
                        src={lawyers[5].image}
                        width="300"
                        height="300"
                        alt={lawyers[5].name}
                        style={{ objectFit: 'contain' }}
                        />
                        <div className="flex flex-col mr-2">
                            <span className="text-xl font-semibold">
                                {lawyers[5].name}
                            </span>
                            <span className="mr-4">
                                {lawyers[5].desc}
                            </span>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
)
}
