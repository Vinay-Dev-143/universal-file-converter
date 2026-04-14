import { Metadata } from "next";
import ToolPageLayout from "@/components/ToolPageLayout";

export const metadata: Metadata = {
  title: "Audio Format Converter – Convert MP3, WAV, OGG Online Free",
  description: "Convert audio files between MP3, WAV, OGG, AAC and other formats online for free. Fast, high-quality audio conversion with no sign-up required.",
  alternates: { canonical: "https://universalconvert.app/audio-convert" },
  openGraph: { title: "Free Audio Format Converter Online", url: "https://universalconvert.app/audio-convert" },
};

export default function AudioConvertPage() {
  return (
    <ToolPageLayout
      endpoint="audio-convert"
      acceptedFileTypes="audio/*"
      targetFormat="mp3"
      title="Audio Format Converter"
      tagline="Convert audio files between MP3, WAV, OGG and more — free"
      intro="Different platforms, devices, and applications require different audio formats. Our Audio Converter handles the most popular formats — MP3, WAV, OGG, AAC, FLAC — and converts between them reliably. Whether you're preparing audio for a podcast, a website, or a mobile app, this tool ensures maximum compatibility without any quality loss."
      steps={[
        { title: "Upload Your Audio File", desc: "Drag and drop or browse to select an audio file in any common format (MP3, WAV, OGG, AAC, FLAC, M4A) up to 50 MB." },
        { title: "Convert the Audio", desc: "Click 'Convert File'. Your audio is processed by FFmpeg, the industry-standard audio and video conversion engine." },
        { title: "Download Converted Audio", desc: "Download your converted audio file. It's ready to use in any media player, app, or upload platform." },
      ]}
      supportedFormats={[".MP3", ".WAV", ".OGG", ".AAC", ".FLAC", ".M4A", ".AIFF", ".WMA"]}
      faqs={[
        { q: "What audio formats can I convert?", a: "We support MP3, WAV, OGG, AAC, FLAC, M4A, AIFF, WMA and most other common audio formats as input." },
        { q: "Will the audio quality be preserved?", a: "Yes. For lossless inputs (WAV, FLAC), quality is preserved. For lossy formats (MP3, AAC), the output quality matches the input encoding." },
        { q: "What format does the output download in?", a: "Currently the tool outputs MP3 by default, which is compatible with virtually every device and platform." },
        { q: "Is there a file size limit?", a: "Yes, files up to 50 MB can be uploaded and converted." },
        { q: "Is my audio data private?", a: "Yes. Your audio file is deleted automatically within 30 minutes of processing. We never listen to, analyze, or store your audio content." },
      ]}
    />
  );
}
