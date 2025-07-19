import Hero from "../sections/Hero";
import Categories from "@/sections/Categories";
import OrderSteps from "@/sections/OrderSteps";
import Questions from "@/sections/Questions";
import Plans from "@/sections/Plans";
import CompanyTitleBanner from "@/components/CompanyTitleBanner";

export const metadata = {
    title: 'Главная',
    isHeaderFixed: true,
}

export default function () {
  return (
    <>
        <CompanyTitleBanner />
        <OrderSteps />
    </>
  )
}
