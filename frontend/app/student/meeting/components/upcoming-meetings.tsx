import UpcomingMeetingItem from "./upcoming-meeting-item"

const UpcomingMeetings = () => {
  return (
    <section className="my-8">
      <h2 className="text-xl font-semibold mb-4">Upcoming Meetings</h2>
      <div className="space-y-2">
        <UpcomingMeetingItem
          title="Weekly Sprint Planning"
          room="Rogm 1 - "
          time="Tpday. 14:00 -- 15:00"
          canJoin
        />
        <UpcomingMeetingItem
          title="Design Review"
          room="Rogm 2 + "
          time="Tomarpw 10:00- - 11:30"
        />
        <UpcomingMeetingItem
          title="Client Presentation"
          room="Rogm 1 - "
          time="Apr 10, 13:00 -14:30"
        />
      </div>
    </section>
  )
}

export default UpcomingMeetings
