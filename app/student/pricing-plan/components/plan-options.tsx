import React from "react";
import { Button } from "@/components/ui/button";
import {Plus} from "lucide-react"

interface Plan {
  title: string;
  use: string;
  price: number;
  features: string[];
}

interface Props {
  isMonthly: boolean;
}

const PlanOption: Plan[] = [
  {
    title: "Basic",
    use: "Perfect for Individuals",
    price: 10,
    features: [
      "Access to all basic features",
      "Basic reporting and analytics",
      "Up to 10 individual user",
      "Basic chat and email support",
      "20GB data each user",
    ],
  },
  {
    title: "Standard",
    use: "Perfect for Small Teams",
    price: 20,
    features: [
      "200+ integrations",
      "Advanced reporting and analytics",
      "Up to 20 individual user",
      "Priority chat and email support",
      "40GB data each user",
    ],
  },
];

const PlanOptions = ({ isMonthly }: Props) => {

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6 lg:mx-[7rem]">
      {PlanOption.map((plan, index) => {
        const isHighlighted = (isMonthly && plan.title === "Basic") || (!isMonthly && plan.title === "Standard");

        return (
          <div key={index}>
            <div
              className={`rounded-2xl border  p-6 transition bg-white hover:shadow-lg ${isHighlighted ? "border-blue-500 shadow-lg" : "border-gray-400"
                }`}
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h2 className="text-xl font-bold text-brand-primary">{plan.title}</h2>
                  <p>{plan.use}</p>
                </div>

                <p className="text-base whitespace-nowrap">$ <span className="text-4xl font-bold text-right">{plan.price}</span><span className="text-[#00000099]">/month</span></p>

              </div>
              <hr className="border-gray-300 my-4" />
              <div className="space-y-2 text-gray-500 pl-5 items-start">
                {plan.features.map((feature, idx) => (
                   <div key={idx} className="flex items-center ">
                  <Plus className='w-10' />
                    <span>{feature}</span>
                    </div>
                ))}
              </div>
              <hr className="border-gray-300 my-4" />
              <Button className="w-full my-7 bg-brand-primary rounded-full ">Choose Plan</Button>
            </div>
            
          </div>
        )
      })}
    </div>
  );
};

export default PlanOptions;
