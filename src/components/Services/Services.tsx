import { Container, SectionHeader } from "@/shared"
import { ServicesList } from "../ServicesList/ServicesList"

export const Services=()=>(
    <section id="services" aria-labelledby="services-heading">
        <Container>
            <SectionHeader
                id="services-heading"
                title="Услуги"
                description="Всё, что нужно для комфортного отдыха, — уже включено или организуем по запросу."
            />
            <ServicesList />
        </Container>
    </section>
)