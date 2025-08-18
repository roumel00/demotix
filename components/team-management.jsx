"use client"

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PencilIcon, TrashIcon, UsersIcon } from "lucide-react";
import InviteMember from "@/components/dialogs/invite-member";
import EditMember from "@/components/dialogs/edit-member";
import DeleteMember from "@/components/dialogs/delete-member";

const initialTeamMembers = [
  {
    id: "1",
    name: "Jake Doyle",
    email: "jakedoyle8@gmail.com",
    role: "Admin",
  },
];

export default function TeamManagement() {
  const [teamMembers, setTeamMembers] = useState(initialTeamMembers);

  const addMember = (newMember) => {
    const memberWithId = {
      ...newMember,
      id: Date.now().toString(),
    };
    setTeamMembers([...teamMembers, memberWithId]);
  };

  const updateMember = (id, updatedMember) => {
    setTeamMembers(teamMembers.map(member => 
      member.id === id ? { ...member, ...updatedMember } : member
    ));
  };

  const deleteMember = (id) => {
    setTeamMembers(teamMembers.filter(member => member.id !== id));
  };

  const canDeleteMember = (member) => {
    return member.role !== "Admin";
  };

  return (
    <div className="w-full">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 gap-4">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">Team Management</h1>
          <p className="text-muted-foreground text-lg">
            Easily manage your team by inviting team members.
          </p>
        </div>
        <div className="md:hidden">
          <InviteMember 
            dialogTrigger={<Button variant="default" size="lg" className="w-full">Invite Team Members</Button>} 
            onInvite={addMember}
          />
        </div>
        <div className="hidden md:block">
          <InviteMember 
            dialogTrigger={<Button variant="default" size="lg">Invite Team Members</Button>} 
            onInvite={addMember}
          />
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <UsersIcon className="w-5 h-5" />
            Team Members ({teamMembers.length})
          </CardTitle>
        </CardHeader>
        <CardContent>
          {teamMembers.length === 0 ? (
            <div className="text-center py-12">
              <UsersIcon className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">No team members yet</h3>
              <p className="text-muted-foreground mb-4">
                Get started by inviting your first team member.
              </p>
              <InviteMember 
                dialogTrigger={<Button variant="default">Invite First Member</Button>} 
                onInvite={addMember}
              />
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3 px-4 font-medium">Name</th>
                    <th className="text-left py-3 px-4 font-medium">Email</th>
                    <th className="text-left py-3 px-4 font-medium">Role</th>
                    <th className="text-left py-3 px-4 font-medium">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {teamMembers.map((member) => (
                    <tr key={member.id} className="border-b hover:bg-muted/50 transition-colors">
                      <td className="py-3 px-4 font-medium">{member.name}</td>
                      <td className="py-3 px-4 text-muted-foreground">{member.email}</td>
                      <td className="py-3 px-4">
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          member.role === "Admin" 
                            ? "bg-green-100 text-green-800" 
                            : member.role === "Member"
                            ? "bg-blue-100 text-blue-800"
                            : "bg-gray-100 text-gray-800"
                        }`}>
                          {member.role}
                        </span>
                      </td>
                      <td className="py-3 px-4">
                        <div className="flex items-center gap-2">
                          <EditMember 
                            dialogTrigger={
                              <Button variant="outline" size="sm">
                                <PencilIcon className="w-4 h-4" />
                              </Button>
                            }
                            member={member}
                            onUpdate={(updatedMember) => updateMember(member.id, updatedMember)}
                          />
                          {canDeleteMember(member) && (
                            <DeleteMember 
                              dialogTrigger={
                                <Button variant="destructive" size="sm">
                                  <TrashIcon className="w-4 h-4" />
                                </Button>
                              }
                              member={member}
                              onDelete={() => deleteMember(member.id)}
                            />
                          )}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}