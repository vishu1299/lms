 "use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Plus } from "lucide-react"
import { Label } from "@/components/ui/label"

interface QuestionOption {
  id: string
  label: string
  value: string
}

interface Question {
  id: string
  title: string
  correctOption: string
  options: QuestionOption[]
}

export default function CreateQuiz() {
  const [questions, setQuestions] = useState<Question[]>([
    {
      id: "1",
      title: "",
      correctOption: "",
      options: [
        { id: "a", label: "Option A", value: "" },
        { id: "b", label: "Option B", value: "" },
        { id: "c", label: "Option C", value: "" },
        { id: "d", label: "Option D", value: "" },
      ],
    },
    {
      id: "2",
      title: "",
      correctOption: "",
      options: [
        { id: "a", label: "Option A", value: "" },
        { id: "b", label: "Option B", value: "" },
        { id: "c", label: "Option C", value: "" },
        { id: "d", label: "Option D", value: "" },
      ],
    },
  ])

  const addQuestion = () => {
    const newQuestion: Question = {
      id: (questions.length + 1).toString(),
      title: "",
      correctOption: "",
      options: [
        { id: "a", label: "Option A", value: "" },
        { id: "b", label: "Option B", value: "" },
        { id: "c", label: "Option C", value: "" },
        { id: "d", label: "Option D", value: "" },
      ],
    }
    setQuestions([...questions, newQuestion])
  }

  const deleteQuestion = (questionId: string) => {
    if (questions.length > 1) {
      setQuestions(questions.filter((q) => q.id !== questionId))
    }
  }

  const updateQuestionTitle = (questionId: string, title: string) => {
    setQuestions(questions.map((q) => (q.id === questionId ? { ...q, title } : q)))
  }

  const updateCorrectOption = (questionId: string, correctOption: string) => {
    setQuestions(questions.map((q) => (q.id === questionId ? { ...q, correctOption } : q)))
  }

  const updateOptionValue = (questionId: string, optionId: string, value: string) => {
    setQuestions(
      questions.map((q) =>
        q.id === questionId
          ? {
              ...q,
              options: q.options.map((o) => (o.id === optionId ? { ...o, value } : o)),
            }
          : q,
      ),
    )
  }

  return (
    <div className="space-y-8">
      {questions.map((question, index) => (
        <div key={question.id} className="space-y-6">
          <h2 className="text-lg font-medium text-gray-910">Question {index + 1}</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 text-gray-910 gap-6">
            <div>
              <Label htmlFor={`title-${question.id}`} className="text-sm font-normal mb-2">
                Title
              </Label>
              <Input
                id={`title-${question.id}`}
                placeholder="Type Here"
                value={question.title}
                onChange={(e) => updateQuestionTitle(question.id, e.target.value)}
                className="bg-gray-40 placeholder:text-transparent-30"
              />
            </div>

            <div>
              <Label htmlFor={`correct-option-${question.id}`} className="text-sm font-normal mb-2">
                Select Correct Option
              </Label>
              <Select value={question.correctOption} onValueChange={(value) => updateCorrectOption(question.id, value)}>
                <SelectTrigger id={`correct-option-${question.id}`} className="bg-gray-40 text-transparent-30 border-none shadow-none w-full">
                  <SelectValue placeholder="Please Select" />
                </SelectTrigger>
                <SelectContent>
                  {question.options.map((option) => (
                    <SelectItem key={option.id} value={option.id}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="mt-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-medium text-gray-910">Options</h3>
              <Button size="sm" onClick={addQuestion} className="bg-blue-600 hover:bg-blue-700 text-xs text-white">
                <Plus className="h-4 w-4" />
                Add Question
              </Button>
            </div>
            <div className="space-y-4 px-6">
              {question.options.map((option) => (
                <div key={option.id} className="grid grid-cols-[80px_1fr] items-center">
                  <label htmlFor={`option-${question.id}-${option.id}`} className="text-sm text-stone-700">
                    {option.label}
                  </label>
                  <Input
                    id={`option-${question.id}-${option.id}`}
                    placeholder="Type answer"
                    value={option.value}
                    onChange={(e) => updateOptionValue(question.id, option.id, e.target.value)}
                    className="bg-gray-40 placeholder:text-transparent-30"
                  />
                </div>
              ))}
              <div className="flex justify-end">
            <button onClick={() => deleteQuestion(question.id)} className="text-red-500 hover:text-red-700 text-sm underline">
              Delete Question
            </button>
          </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
