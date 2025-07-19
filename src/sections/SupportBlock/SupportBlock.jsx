import './SupportBlock.scss'
import { Image } from 'minista'
import Field from "@/components/Field";
import Checkbox from "@/components/Checkbox";
import Button from "@/components/Button";
import Select from "@/components/Select";

const SupportBlock = () => {
    const titleId = 'support-block-title';

    return (
        <section
            className='support-block container'
            aria-labelledby={titleId}
        >
            <div className="support-block__body">
                <div className="support-block__info">
                    <h1 className="support-block__title h2" id={titleId}>
                        Welcome to our support page!
                    </h1>
                    <div className="support-block__description">
                        <p>We're here to help you with any problems you may be having with our product.</p>
                    </div>
                </div>
                <Image
                    src='/src/assets/images/support/1.png'
                    className='support-block__image'
                    alt='Support Image'
                    title='Support Image'
                />
            </div>
            <form className="support-block__form" action=''>
                <Field
                    className="support-block__form-cell"
                    label='First Name'
                    placeholder='Petr'
                    isRequired
                />
                <Field
                    className="support-block__form-cell"
                    label='Last Name'
                    placeholder='Smith'
                />
                <Field
                    className="support-block__form-cell"
                    label='Email'
                    placeholder='example@example.com'
                    isRequired
                />
                <Field
                    className="support-block__form-cell"
                    label='Phone Number'
                    placeholder='(000) 000-00-00'
                    inputMode='tel'
                    mask='(000) 000-00-00'
                    renderBefore={(fieldControlClassName) => (
                        (
                            <Select
                                label='Phone Number Prefix'
                                buttonClassName={fieldControlClassName}
                                options={[
                                    {value: '+7', isSelected: true},
                                    {value: '+34'},
                                    {value: '+2'},
                                    {value: '+112'},
                                ]}
                            />
                        )
                    )}
                />
                <Field
                    className="support-block__form-cell support-block__form-cell--wide"
                    type='textarea'
                    label='Message'
                    placeholder='Hello! I have a question...'
                    isRequired
                />
                <div className="support-block__form-cell support-block__form-cell--wide support-block__form-cell--actions">
                    <Checkbox
                        className="support-block__form-agreement"
                        label='I agree with Terms of Use and Privacy Policy'
                        isRequired
                    />
                    <Button
                        className="support-block__submit-button"
                        label='Send Message'
                        type='submit'
                    />
                </div>
            </form>
        </section>
    )
}

export default SupportBlock