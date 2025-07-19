import Section from "@/layouts/Section";
import Grid from "@/components/Grid";
import PlansCard from "@/components/PlansCard";
import Tabs from "@/components/Tabs";
import plansItems from "@/sections/Plans/plansitems";
import TabsNavigation from "@/components/Tabs/components/TabsNavigation";

const Plans = () => {
    const tabsTitle = 'plans-tabs';
    const tabsNavigationId = 'plans-tabs-navigation';

    return (
        <Section
            title="Choose the plan that's right for you"
            titleId='plans-title'
            description="Join StreamVibe and select from our flexible subscription options tailored to suit your viewing preferences. Get ready for non-stop entertainment!"
            actions={(
                <TabsNavigation
                    id={tabsNavigationId}
                    title={tabsTitle}
                    items={plansItems}
                />
            )}
        >
            <Tabs
                navigationTargetElementId={tabsNavigationId}
                title={tabsTitle}
                items={plansItems.map((planItem, index) => ({
                    title: planItem.title,
                    isActive: planItem.isActive,
                    children: (
                        <Grid columns={3}>
                            {planItem.items.map((planItem, index) => (
                                <PlansCard {...planItem} key={index}/>
                            ))}
                        </Grid>
                    ),
                }))}
            />
        </Section>
    )
}

export default Plans