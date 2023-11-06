// https://registry.terraform.io/providers/hashicorp/consul/2.19.0/docs/resources/namespace
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NamespaceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.19.0/docs/resources/namespace#description Namespace#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.19.0/docs/resources/namespace#id Namespace#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.19.0/docs/resources/namespace#meta Namespace#meta}
  */
  readonly meta?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.19.0/docs/resources/namespace#name Namespace#name}
  */
  readonly name: string;
  /**
  * The partition the namespace is associated with.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.19.0/docs/resources/namespace#partition Namespace#partition}
  */
  readonly partition?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.19.0/docs/resources/namespace#policy_defaults Namespace#policy_defaults}
  */
  readonly policyDefaults?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.19.0/docs/resources/namespace#role_defaults Namespace#role_defaults}
  */
  readonly roleDefaults?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/consul/2.19.0/docs/resources/namespace consul_namespace}
*/
export class Namespace extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "consul_namespace";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Namespace resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Namespace to import
  * @param importFromId The id of the existing Namespace that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/consul/2.19.0/docs/resources/namespace#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Namespace to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "consul_namespace", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/consul/2.19.0/docs/resources/namespace consul_namespace} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NamespaceConfig
  */
  public constructor(scope: Construct, id: string, config: NamespaceConfig) {
    super(scope, id, {
      terraformResourceType: 'consul_namespace',
      terraformGeneratorMetadata: {
        providerName: 'consul',
        providerVersion: '2.19.0',
        providerVersionConstraint: '~> 2.16'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._id = config.id;
    this._meta = config.meta;
    this._name = config.name;
    this._partition = config.partition;
    this._policyDefaults = config.policyDefaults;
    this._roleDefaults = config.roleDefaults;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // meta - computed: false, optional: true, required: false
  private _meta?: { [key: string]: string }; 
  public get meta() {
    return this.getStringMapAttribute('meta');
  }
  public set meta(value: { [key: string]: string }) {
    this._meta = value;
  }
  public resetMeta() {
    this._meta = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metaInput() {
    return this._meta;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // partition - computed: false, optional: true, required: false
  private _partition?: string; 
  public get partition() {
    return this.getStringAttribute('partition');
  }
  public set partition(value: string) {
    this._partition = value;
  }
  public resetPartition() {
    this._partition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partitionInput() {
    return this._partition;
  }

  // policy_defaults - computed: false, optional: true, required: false
  private _policyDefaults?: string[]; 
  public get policyDefaults() {
    return this.getListAttribute('policy_defaults');
  }
  public set policyDefaults(value: string[]) {
    this._policyDefaults = value;
  }
  public resetPolicyDefaults() {
    this._policyDefaults = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyDefaultsInput() {
    return this._policyDefaults;
  }

  // role_defaults - computed: false, optional: true, required: false
  private _roleDefaults?: string[]; 
  public get roleDefaults() {
    return this.getListAttribute('role_defaults');
  }
  public set roleDefaults(value: string[]) {
    this._roleDefaults = value;
  }
  public resetRoleDefaults() {
    this._roleDefaults = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleDefaultsInput() {
    return this._roleDefaults;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      meta: cdktf.hashMapper(cdktf.stringToTerraform)(this._meta),
      name: cdktf.stringToTerraform(this._name),
      partition: cdktf.stringToTerraform(this._partition),
      policy_defaults: cdktf.listMapper(cdktf.stringToTerraform, false)(this._policyDefaults),
      role_defaults: cdktf.listMapper(cdktf.stringToTerraform, false)(this._roleDefaults),
    };
  }
}
