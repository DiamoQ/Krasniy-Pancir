import Section from "@/layouts/Section";
import Button from "@/components/Button";
import questionItems from "@/sections/Questions/questionItems";
import AccordeonGroup from "@/components/AccordeonGroup";
import Accordeon from "@/components/Accordeon";

const Questions = () => {
    return (
        <Section
            title='Frequently Asked Questions'
            titleId='questions-title'
            description="Got questions? We've got answers! Check out our FAQ section to find answers to the most common questions about StreamVibe."
            actions={(
                <Button
                    href='/support'
                    label='Ask a Question'
                />
            )}
        >
            <AccordeonGroup columns={2}>
                {questionItems.map(({question, answer}, i) => (
                    <Accordeon
                        title={question}
                        id={`question-${i}`}
                        name='questions'
                        isOpen={i === 0}
                        key={i}
                    >
                        {answer}
                    </Accordeon>
                ))}
            </AccordeonGroup>
        </Section>
    )
}

export default Questions