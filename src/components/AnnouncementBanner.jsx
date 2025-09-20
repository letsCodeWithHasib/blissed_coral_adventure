// src/components/AnnouncementBanner.jsx
const AnnouncementBanner = ({ announcements }) => {
  return (
    <div className="bg-yellow-100 text-yellow-800 py-2 overflow-hidden">
      <div className="animate-marquee whitespace-nowrap">
        {announcements.map((a, idx) => (
          <span key={idx} className="mx-6 font-semibold">
            📢 {a.title}: {a.description} (Valid till {a.validTill})
          </span>
        ))}
      </div>
    </div>
  );
};

export default AnnouncementBanner;
