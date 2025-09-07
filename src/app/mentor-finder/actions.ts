"use server";

import { recommendAlumniMentors } from "@/ai/flows/recommend-alumni-mentors";
import { alumni } from "@/lib/mock-data";

export async function findMentorsAction(
  prevState: { recommendations: string | null; error: string | null },
  formData: FormData
) {
  const interests = formData.get("interests") as string;

  if (!interests) {
    return {
      recommendations: null,
      error: "Please describe your interests.",
    };
  }
  
  try {
    const alumniProfiles = alumni
      .map(
        (a) =>
          `Name: ${a.name}, Field: ${a.fieldOfStudy}, Skills: ${a.skills.join(", ")}`
      )
      .join("\n");
      
    const result = await recommendAlumniMentors({
      studentCareerInterests: interests,
      alumniProfiles: alumniProfiles,
    });

    return {
      recommendations: result.recommendedMentors,
      error: null,
    };
  } catch (e) {
    console.error(e);
    return {
      recommendations: null,
      error: "An error occurred while finding mentors. Please try again.",
    };
  }
}
