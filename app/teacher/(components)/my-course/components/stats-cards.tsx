import { ShoppingBag, CircleDollarSign, Eye } from "lucide-react"

type card = {
    icon: React.ElementType
    name: string
    total: string
}

const cards: card[] = [
    {
        icon: ShoppingBag, name: "Active Learners", total: "251"
    },
    {
        icon: CircleDollarSign, name: "Total Enrollments", total: "456"
    },
    {
        icon: Eye, name: "New Visitor", total: "75%"
    },
]

const StatsCards = () => {
    return (
        <div className="flex justify-between">
            {cards.map((card, idx) => {
                const Icon = card.icon
                return (
                    <div key={idx} className="flex space-x-8 shadow px-3 py-6">
                        <div className="space-y-2">
                            <Icon />
                            <p className="text-sm font-medium">{card.name}</p>
                        </div>
                        <p className={`font-medium text-lg ${card.name !== "Total Enrollments"?"text-emerald-600":"text-blue-600"}`}>{card.total}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default StatsCards