import { Metadata } from "next";
import ToolPageLayout from "@/components/ToolPageLayout";

export const metadata: Metadata = {
  title: "Video to MP3 Converter – Extract Audio from Any Video Free",
  description: "Convert MP4, AVI, MKV, MOV and other videos to MP3 audio online for free. Extract high-quality audio from any video in seconds. No software needed.",
  alternates: { canonical: "https://universalconvert.app/video-to-mp3" },
  openGraph: { title: "Free Video to MP3 Converter Online", url: "https://universalconvert.app/video-to-mp3" },
};

export default function VideoToMp3Page() {
  return (
    <ToolPageLayout
      endpoint="video-to-mp3"
      acceptedFileTypes="video/*"
      title="Video to MP3 Converter"
      tagline="Extract high-quality MP3 audio from any video file — free"
      intro="Want the audio from a video without the video? Our Video to MP3 converter uses FFmpeg to extract the audio track from any video file and save it as a high-quality MP3. This is perfect for extracting podcast audio, music, lectures, or soundtracks. Upload your video and get the MP3 in seconds — no software installation needed."
      steps={[
        { title: "Upload Your Video", desc: "Select an MP4, AVI, MKV, MOV, or any other video file up to 50 MB and upload it to the converter." },
        { title: "Extract MP3 Audio", desc: "Click 'Convert File'. FFmpeg extracts the audio track from your video and encodes it as a high-quality MP3 file." },
        { title: "Download Your MP3", desc: "Your MP3 is ready to download. Play it in any media player, music app, or upload it anywhere." },
      ]}
      supportedFormats={[".MP4", ".AVI", ".MKV", ".MOV", ".WMV", ".FLV", ".WEBM", ".3GP"]}
      faqs={[
        { q: "What video formats are supported?", a: "We support MP4, AVI, MKV, MOV, WMV, FLV, WEBM, 3GP, and most other common video formats." },
        { q: "What quality is the extracted MP3?", a: "The audio is extracted at the source quality of the video's audio track. The output MP3 is encoded at high quality (192 kbps equivalent)." },
        { q: "Is this tool free?", a: "Yes, completely free. No account required, no watermarks, no usage limits." },
        { q: "Are my video files private?", a: "Yes. Video files are uploaded securely over HTTPS and automatically deleted from our servers within 30 minutes." },
        { q: "Can I extract audio from YouTube videos?", a: "No. This tool works with files you upload directly. We do not support downloading or processing videos from YouTube or other streaming platforms." },
        { q: "Why is my video taking longer to convert?", a: "Larger video files take longer to upload and process. Files over 20 MB may take 30–60 seconds depending on your internet speed." },
      ]}
    />
  );
}
