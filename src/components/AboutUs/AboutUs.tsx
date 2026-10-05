import { Container } from "@/shared"
import { AddressCard } from "../AddressCard/AddressCard"

export const AboutUs=()=>{
    return(
        <section id="about-us" aria-labelledby="about-heading">
            <Container className="grid grid-cols-1 gap-x-24 gap-y-10 md:grid-cols-[400px_minmax(0,1fr)]">
                <div className="flex flex-col gap-y-9">
                    <h2 className="text-4xl font-bold" id="about-heading">
                        О гостевом доме
                    </h2>
                    <p className="text-ink-soft text-sm leading-7">
                        <strong className="text-ink">«Уютное море»</strong> расположен в тихом и уютном районе, в шаговой доступности от 
                        моря и основных достопримечательностей Анапы. Мы открыты круглый год и рады 
                        принимать гостей всех возрастов: от семей с детьми до бизнес-туристов.
                        Наш гостевой дом предлагает 12 комфортабельных номеров, чистоту, порядок и 
                        высокий уровень сервиса. Приятный персонал всегда готов помочь вам в организации 
                        отдыха и ответить на все ваши вопросы.
                    </p>
                </div>
                <AddressCard />
            </Container>
        </section>
    )
}