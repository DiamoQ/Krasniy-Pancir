
import './OrderSteps.scss'
import Section from "@/layouts/Section";
import Grid from "@/components/Grid";
import devicesItems from "@/sections/OrderSteps/devicesitems";
import OrderStepsCard from "src/components/OrderStepsCard";

const OrderSteps = (props) => {

  return (
      <Section
          title='Как сделать заказ'
          titleId='order-steps-title'
      >
        <Grid
            columns={3}
        >
            {devicesItems.map((card, index) => (
                <OrderStepsCard
                    {...card}
                    key={index }
                />
            ))}
        </Grid>
      </Section>
  )
}

export default OrderSteps