<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Contact;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ContactController extends Controller
{
    public function index(Request $request)
    {
        $contacts = Contact::query()
            ->when($request->string('q'), fn($q,$t)=>$q->where('name','like',"%$t%"))
            ->orderBy('id','desc')->paginate(15)->withQueryString();
        return Inertia::render('Admin/Contact/index', [ 'contacts' => $contacts, 'filters' => ['q'=>(string)$request->string('q')] ]);
    }

    public function create()
    {
        return Inertia::render('Admin/Contact/create');
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            'name' => ['required','string','max:255'],
            'email' => ['nullable','email','max:255'],
            'phone' => ['nullable','string','max:50'],
            'whatsapp' => ['nullable','string','max:50'],
            'address' => ['nullable','string'],
        ]);
        Contact::create($data);
        return redirect()->route('admin.contact.index')->with('success','Contact created');
    }

    public function edit(Contact $contact)
    {
        return Inertia::render('Admin/Contact/edit', [ 'contact' => $contact ]);
    }

    public function update(Request $request, Contact $contact)
    {
        $data = $request->validate([
            'name' => ['required','string','max:255'],
            'email' => ['nullable','email','max:255'],
            'phone' => ['nullable','string','max:50'],
            'whatsapp' => ['nullable','string','max:50'],
            'address' => ['nullable','string'],
        ]);
        $contact->update($data);
        return redirect()->route('admin.contact.index')->with('success','Contact updated');
    }

    public function destroy(Contact $contact)
    {
        $contact->delete();
        return redirect()->route('admin.contact.index')->with('success','Contact deleted');
    }
}

