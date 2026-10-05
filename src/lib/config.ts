interface LinkHeader{
    name: string
    to: string
}

export const links: LinkHeader[]=[
    {
        name: "На главную",
        to: "/"
    },
    {
        name: "О гостинице",
        to: "#about-us"
    },
    {
        name: "Услуги", 
        to: "#services"
    },
    {
        name: "Номера",
        to: "#rooms"
    },
    {
        name: "Яндекс карты",
        to: "#location"
    }
]

export const heroCards=[
    {
        label: "50 м",
        desc: "до пляжа"
    },
    {
        label: "4.9",
        desc: "средняя оценка гостей"
    },
    {
        label: "27",
        desc: "лет открыты"
    }
]

export const items=[
    "Завтрак включён",
    "Балконы с видом на море",
    "Wi-Fi во всём доме",
    "Парковка во дворе",
    "Открыты круглый год",
]

export type AmenityVariant="cream"|"violet"|"teal"|"gold"|"coral"

type Amenity={
    category: string
    title: string
    description: string
    variant: AmenityVariant
}

export const amenities: Amenity[]=[
    {
        category: "включено",
        title: "Wi-Fi и завтрак",
        description: "Бесплатный Wi-Fi по всему дому. Завтрак — по предварительной договорённости.",
        variant: "cream",
    },
    {
        category: "для отдыха",
        title: "Велосипеды и снаряжение",
        description: "Прокат велосипедов и морских снарядов.",
        variant: "violet",
    },
    {
        category: "логистика",
        title: "Трансфер",
        description: "Встретим и отвезём от вокзала и аэропорта.",
        variant: "teal",
    },
    {
        category: "на территории",
        title: "Бесплатная парковка",
        description: "Место во дворе для вашего автомобиля.",
        variant: "gold",
    },
    {
        category: "сервис",
        title: "Прачечная и экскурсии",
        description: "Химчистка, стирка, бронирование экскурсий и билетов.",
        variant: "coral",
    },
]

export interface Room{
    slug: string
    title: string
    area: string
    price: number
    capacity: string
    location: string
    beachDistance: string
    beds: string
    kitchen?: string
    amenities: string[]
    checkin: string
    checkout: string
    earlyLatePolicy: string
    tagline: string
    images: string[]
    video?: string
}

export const rooms: Room[]=[
    {
        slug: "2-places",
        title: "Двухместный",
        area: "18 м²",
        price: 2000,
        capacity: "до 2 чел.",
        location: "Первая береговая линия, ул. Магнолии 21/2, Анапа",
        beachDistance: "До галечного пляжа 5 минут (300 ступеней)",
        beds: "Новая кровать 140×200",
        amenities: ["Дизайнерский ремонт", "Кондиционер", "Wi-Fi", "Smart-TV", "Стиральная машина", "Микроволновка", "Душевая с тропическим душем"],
        checkin: "14:00",
        checkout: "12:00",
        earlyLatePolicy: "Ранний заезд и поздний выезд — бесплатно, предупредите заранее",
        tagline: "Идеально для спокойного отдыха вдвоём",
        images: [
            "/rooms/2-places/1.jpg",
            "/rooms/2-places/2.jpg",
            "/rooms/2-places/3.jpg",
            "/rooms/2-places/4.jpg",
            "/rooms/2-places/5.jpg",
            "/rooms/2-places/6.jpg",
            "/rooms/2-places/7.jpg",
            "/rooms/2-places/8.jpg",
        ],
        video: "/rooms/2-places/tour.mp4",
    },
    {
        slug: "4-places",
        title: "4+1",
        area: "35,4 м²",
        price: 3500,
        capacity: "до 4 чел.",
        location: "Ул. Магнолии 21/2, Анапа — 1-я береговая линия, вид на море",
        beachDistance: "До галечного пляжа 5 минут (300 ступеней)",
        beds: "2 кровати 160×200 + кресло-кровать 80×200",
        kitchen: "Газовая плита, холодильник, СВЧ, посуда",
        amenities: ["Кондиционер", "Smart-TV", "Wi-Fi", "Стиральная машина", "Тропический душ"],
        checkin: "14:00",
        checkout: "12:00",
        earlyLatePolicy: "Ранний заезд и поздний выезд — бесплатно, если номер свободен",
        tagline: "Тишина, комфорт, море у дома",
        images: [
            "/rooms/4-places/1.jpg",
            "/rooms/4-places/2.jpg",
            "/rooms/4-places/3.jpg",
            "/rooms/4-places/4.jpg",
            "/rooms/4-places/5.jpg",
            "/rooms/4-places/6.jpg",
            "/rooms/4-places/7.jpg",
            "/rooms/4-places/8.jpg",
            "/rooms/4-places/9.jpg",
            "/rooms/4-places/10.jpg",
            "/rooms/4-places/11.jpg",
            "/rooms/4-places/12.jpg",
            "/rooms/4-places/13.jpg",
            "/rooms/4-places/14.jpg",
            "/rooms/4-places/15.jpg",
            "/rooms/4-places/16.jpg",
            "/rooms/4-places/17.jpg",
            "/rooms/4-places/18.jpg",
            "/rooms/4-places/19.jpg",
            "/rooms/4-places/20.jpg",
        ],
        video: "/rooms/4-places/tour.mp4",
    },
    {
        slug: "5-places",
        title: "3+2",
        area: "45,4 м²",
        price: 3500,
        capacity: "до 5 чел.",
        location: "Ул. Магнолии 21/2, Анапа — 1-я береговая линия, вид на море",
        beachDistance: "До галечного пляжа 5 минут (300 ступеней)",
        beds: "Кровать 160×200 + кровать 80×200 + два диван-кровати 140×200, ортопедические матрасы",
        kitchen: "Варочная панель, холодильник, СВЧ, чайник, посуда",
        amenities: ["Кондиционер", "Smart-TV", "Wi-Fi", "Стиральная машина", "Тропический душ", "Фен"],
        checkin: "14:00",
        checkout: "12:00",
        earlyLatePolicy: "Ранний заезд и поздний выезд — бесплатно, если номер свободен",
        tagline: "Просторно, тихо — идеально для семьи или компании у моря",
        images: [
            "/rooms/5-places/1.jpg",
        ],
        video: "/rooms/5-places/tour.mp4",
    },
]